'use client';

import { useRouter, useSearchParams } from "next/navigation";

function useProductTypes() {
  const searchParams = useSearchParams();
  const types = searchParams.get('types') || '';
  const router = useRouter();

  const typesArray = types.split(',');

  const handleTypes = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    const params = new URLSearchParams(searchParams);
    const currentTypes = params.get('types')?.split(',') || [];
    if (currentTypes?.includes(name)) {
      currentTypes?.splice(currentTypes.indexOf(name), 1);
    } else {
      currentTypes?.push(name);
    }
    const newTypes = currentTypes?.join(',') || '';
    if (newTypes === '') {
      params.delete('types');
    } else {
      params.set('types', newTypes);
    }
    router.replace(`/products?${params.toString()}`);
  };

  return { typesArray, handleTypes };
}

export default useProductTypes;