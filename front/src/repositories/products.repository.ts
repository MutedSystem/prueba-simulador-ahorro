import { Product } from "../entities/Product";

export const productsRepository = {
  getProducts: async (search: string = '', sort?: string, order: string = 'asc'): Promise<Product[]> => {
    const response = await fetch(`${process.env.API_URL}/products?search=${search}&sort=${sort}&order=${order}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });
    const data = await response.json();
    return data;
  }
};