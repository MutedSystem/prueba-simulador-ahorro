import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { LeadsModule } from './leads/leads.module';

@Module({
  imports: [ProductsModule, LeadsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
