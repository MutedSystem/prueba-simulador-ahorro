'use client';

import { useRouter, useSearchParams } from "next/navigation";

function useProductSort() {
  const searchParams = useSearchParams();
  const sort = searchParams.get('sort') || '';
  const order = searchParams.get('order') || 'asc';

  const sortOrder = `${sort}-${order}`;

  const router = useRouter();

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    const params = new URLSearchParams(searchParams);
    const [sort, order] = value.split('-');
    params.set('sort', sort);
    params.set('order', order);
    if(sort === '') {
      params.delete('sort');
      params.delete('order');
    }
    router.replace(`/products?${params.toString()}`);
  };

  return { sortOrder, handleSort };
} 

export default useProductSort;