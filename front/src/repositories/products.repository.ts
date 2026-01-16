import { Product } from "../entities/Product";

export const productsRepository = {
    getProducts: async (search: string = ''): Promise<Product[]> => {
        const response = await fetch(`${process.env.API_URL}/products?search=${search}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            cache: 'no-store',
        });
        const data = await response.json();
        return data;
    }
}