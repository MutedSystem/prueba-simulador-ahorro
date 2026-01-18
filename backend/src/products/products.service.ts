import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(search: string, sort: string, order: string = 'asc') {
    /// Filtro de productos por nombre, descripción corta, descripción larga y tags
    /// Se normaliza el nombre, descripción corta, descripción larga y tags para que se pueda buscar de forma case insensitive
    /// Se ordena los productos por el campo sort y order
    /// Si no se proporciona sort, se devuelve la lista de productos sin ordenar
    /// Si no se proporciona order, se asume ascendente

    const products = await this.prismaService.product.findMany({});

    return products;
  }
}
