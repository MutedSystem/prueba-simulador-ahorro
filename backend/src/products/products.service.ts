import { Injectable } from '@nestjs/common';
import { PRODUCTS } from './const/products';
import { normalizeString } from 'src/utils/normalizeString';

@Injectable()
export class ProductsService {
  findAll(search: string) {
    if (!search) {
      return PRODUCTS;
    }

    /// Filtro de productos por nombre, descripción corta, descripción larga y tags
    /// Se normaliza el nombre, descripción corta, descripción larga y tags para que se pueda buscar de forma case insensitive
    const normalizedSearch = normalizeString(search);
    const products = PRODUCTS.filter(
      (product) =>
        normalizeString(product.nombre).includes(normalizedSearch) ||
        normalizeString(product.descripcionCorta).includes(normalizedSearch) ||
        normalizeString(product.descripcionLarga).includes(normalizedSearch) ||
        product.tags.some((tag) =>
          normalizeString(tag).includes(normalizedSearch),
        ),
    );

    return products;
  }
}
