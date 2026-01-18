import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { SORT_NAMES } from './const/sortNames';
import { normalizeString } from 'src/utils/normalizeString';

@Injectable()
export class ProductsService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(
    search: string,
    sort?: string,
    order: string = 'asc',
    types: string = '',
    currencies: string = '',
    minAmount?: number,
    maxAmount?: number,
  ) {
    const searchParams: Prisma.ProductFindManyArgs = {};

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
      searchParams.where = filters;
    }

    if (types) {
      const typesArray = types.split(',');
      filters.tipo = {
        in: typesArray,
      };
      searchParams.where = filters;
    }

    if (currencies) {
      const currenciesArray = currencies.split(',');
      filters.moneda = {
        in: currenciesArray,
      };
      searchParams.where = filters;
    }

    const amountFilter = {
      minAmount: minAmount ? Number(minAmount) : undefined,
      maxAmount: maxAmount ? Number(maxAmount) : undefined,
    };
    if (amountFilter.minAmount && amountFilter.maxAmount) {
      filters.AND = [
        {
          montoMinimo: {
            gte: amountFilter.minAmount,
          },
        },
        {
          montoMinimo: {
            lte: amountFilter.maxAmount,
          },
        },
      ];
    } else if (amountFilter.minAmount) {
      filters.montoMinimo = {
        gte: amountFilter.minAmount,
      };
    } else if (amountFilter.maxAmount) {
      filters.montoMinimo = {
        lte: amountFilter.maxAmount,
      };
    }

    searchParams.where = filters;

    let orderBy: Prisma.ProductOrderByWithRelationInput = {};

    if (sort && Object.keys(SORT_NAMES).includes(sort)) {
      orderBy = {
        [SORT_NAMES[sort]]: order,
      };
    }

    if (orderBy) {
      searchParams.orderBy = orderBy;
    }

    console.log('searchParams', JSON.stringify(searchParams, null, 2));

    const products = await this.prismaService.product.findMany(searchParams);

    return products.map((product) => ({
      ...product,
      tags: product.tags.split(','),
    }));
  }

  async getFilters() {
    const types = await this.prismaService.product.groupBy({
      by: ['tipo'],
    });

    const currencies = await this.prismaService.product.groupBy({
      by: ['moneda'],
    });

    const minAmount = await this.prismaService.product.aggregate({
      _min: {
        montoMinimo: true,
      },
    });

    const maxAmount = await this.prismaService.product.aggregate({
      _max: {
        montoMinimo: true,
      },
    });

    return {
      types: types.map((type) => type.tipo),
      currencies: currencies.map((currency) => currency.moneda),
      minAmount: minAmount._min.montoMinimo,
      maxAmount: maxAmount._max.montoMinimo,
    };
  }
}
