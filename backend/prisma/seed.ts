import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client';
import { Pool } from 'pg';
import { PRODUCTS } from '../src/products/const/products';
import { normalizeString } from 'src/utils/normalizeString';

const prisma = new PrismaClient({
  adapter: new PrismaPg(
    new Pool({
      connectionString: process.env.DATABASE_URL as string,
      ssl: false,
    }),
  ),
});

function main() {
  prisma.product
    .createMany({
      data: PRODUCTS.map((product) => ({
        ...product,
        tags: product.tags.join(','),
        nombre_busqueda: normalizeString(product.nombre),
        descripcion_corta_busqueda: normalizeString(product.descripcionCorta),
        descripcion_larga_busqueda: normalizeString(product.descripcionLarga),
      })),
    })
    .then(() => {
      console.log('Productos creados');
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
}

main();
