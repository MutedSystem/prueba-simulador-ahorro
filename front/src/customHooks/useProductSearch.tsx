'use client';

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

function useProductSearch() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const baseSearch = searchParams.get('search') || '';

    const [search, setSearch] = useState(baseSearch);
    const [debouncedSearch] = useDebounce(search, 500);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        params.set('search', debouncedSearch);
        if(search === '') {
            params.delete('search');
        }
        router.replace(`/products?${params.toString()}`);
    }, [debouncedSearch]);

    return { search, handleSearch };
}

export default useProductSearch;