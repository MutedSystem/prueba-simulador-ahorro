import { Controller, Get, Query } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll(
    @Query('search') search: string,
    @Query('sort') sort: string,
    @Query('order') order: string,
  ) {
    return this.productsService.findAll(search, sort, order);
  }
}
