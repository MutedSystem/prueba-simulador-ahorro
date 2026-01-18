import { Controller, Get, Query } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll(
    @Query('search') search: string,
    @Query('sort') sort: 'nombre' | 'montoMinimo' | undefined,
    @Query('order') order: 'asc' | 'desc' = 'asc',
    @Query('types') types: string,
    @Query('currencies') currencies: string,
  ) {
    return this.productsService.findAll(search, sort, order, types, currencies);
  }

  @Get('filters')
  getFilters() {
    return this.productsService.getFilters();
  }
}
