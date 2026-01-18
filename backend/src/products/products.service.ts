import { Injectable } from '@nestjs/common';
import { PRODUCTS } from './const/products';
import { normalizeString } from 'src/utils/normalizeString';
import { SORT_NAMES } from './const/sortNames';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  findAll(search: string, sort: string, order: string = 'asc') {
    /// Filtro de productos por nombre, descripción corta, descripción larga y tags
    /// Se normaliza el nombre, descripción corta, descripción larga y tags para que se pueda buscar de forma case insensitive
    /// Se ordena los productos por el campo sort y order
    /// Si no se proporciona sort, se devuelve la lista de productos sin ordenar
    /// Si no se proporciona order, se asume ascendente
    const products = PRODUCTS.filter((product) => {
      if (search) {
        const normalizedSearch = normalizeString(search);
        return (
          normalizeString(product.nombre).includes(normalizedSearch) ||
          normalizeString(product.descripcionCorta).includes(
            normalizedSearch,
          ) ||
          normalizeString(product.descripcionLarga).includes(
            normalizedSearch,
          ) ||
          product.tags.some((tag) =>
            normalizeString(tag).includes(normalizedSearch),
          )
        );
      }
      return true;
    }).sort((a, b) => {
      if (!sort) {
        return 0;
      }
      const sortKey = SORT_NAMES[sort] as keyof Product;
      if (!sortKey) {
        return 0;
      }
      const aValue = a[sortKey];
      const bValue = b[sortKey];

      const multiplier = order === 'asc' ? 1 : -1;

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return (aValue - bValue) * multiplier;
      }

      return (aValue as string).localeCompare(bValue as string) * multiplier;
    });

    return products;
  }
}
