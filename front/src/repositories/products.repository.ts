import { GetFiltersDTO } from "../entities/GetFiltersDTO";
import { Product } from "../entities/Product";

export const productsRepository = {
  getProducts: async (search: string = '', sort?: string, order: string = 'asc', types: string = ''): Promise<Product[]> => {
    const response = await fetch(`${process.env.API_URL}/products?search=${search}&sort=${sort}&order=${order}&types=${types}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });
    const data = await response.json();
    return data;
  },
  getFilters: async (): Promise<GetFiltersDTO> => {
    const response = await fetch(`${process.env.API_URL}/products/filters`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: {
        revalidate: 60 * 60 // 1 hour,
      },
    });
    const data = await response.json();
    return data;
  },
};