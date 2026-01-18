import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { SORT_NAMES } from './const/sortNames';
import { normalizeString } from 'src/utils/normalizeString';

@Injectable()
export class ProductsService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(search: string, sort?: string, order: string = 'asc') {
    const filters: Prisma.ProductWhereInput = {};

    if (search) {
      const normalizedSearch = normalizeString(search);
      filters.OR = [
        {
          nombre_busqueda: { contains: normalizedSearch, mode: 'insensitive' },
        },
        {
          descripcion_corta_busqueda: {
            contains: normalizedSearch,
            mode: 'insensitive',
          },
        },
        {
          descripcion_larga_busqueda: {
            contains: normalizedSearch,
            mode: 'insensitive',
          },
        },
      ];
    }

    let orderBy: Prisma.ProductOrderByWithRelationInput = {};

    if (sort && Object.keys(SORT_NAMES).includes(sort)) {
      orderBy = {
        [SORT_NAMES[sort]]: order,
      };
      console.log(orderBy);
    }

    const searchParams: Prisma.ProductFindManyArgs = {};

    if (search) {
      searchParams.where = filters;
    }

    if (orderBy) {
      searchParams.orderBy = orderBy;
    }

    const products = await this.prismaService.product.findMany(searchParams);

    return products;
  }
}
