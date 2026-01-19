import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client';
import { PRODUCTS } from '../src/products/const/products';
import { Pool } from 'pg';

const prisma = new PrismaClient({
  adapter: new PrismaPg(
    new Pool({
      connectionString: process.env.DATABASE_URL as string,
      ssl: false,
    }),
  ),
});

const normalizeString = (str: string) => {
  return str
    .normalize('NFD')
    .toLowerCase()
    .replace(/\s+/g, '')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '');
};

async function main() {
  for (const product of PRODUCTS) {
    await prisma.product.upsert({
      where: { id: product.id },
      create: {
        ...product,
        tags: product.tags.join(','),
        nombre_busqueda: normalizeString(product.nombre),
        descripcion_corta_busqueda: normalizeString(product.descripcionCorta),
        descripcion_larga_busqueda: normalizeString(product.descripcionLarga),
      },
      update: {
        ...product,
        tags: product.tags.join(','),
        nombre_busqueda: normalizeString(product.nombre),
        descripcion_corta_busqueda: normalizeString(product.descripcionCorta),
        descripcion_larga_busqueda: normalizeString(product.descripcionLarga),
      },
    });
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
