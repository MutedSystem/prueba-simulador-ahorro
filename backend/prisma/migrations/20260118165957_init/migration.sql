-- CreateEnum
CREATE TYPE "NivelRiesgo" AS ENUM ('bajo', 'medio', 'alto');

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "nombre_busqueda" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "descripcionCorta" TEXT NOT NULL,
    "descripcion_corta_busqueda" TEXT NOT NULL,
    "descripcionLarga" TEXT NOT NULL,
    "descripcion_larga_busqueda" TEXT NOT NULL,
    "moneda" TEXT NOT NULL,
    "riesgo" "NivelRiesgo" NOT NULL,
    "tasaInteresAnual" DOUBLE PRECISION,
    "rentabilidadEsperadaAnual" DOUBLE PRECISION,
    "plazoMeses" INTEGER,
    "liquidezDias" INTEGER,
    "saldoMinimo" INTEGER,
    "montoApertura" INTEGER,
    "montoMinimo" INTEGER NOT NULL,
    "destacado" BOOLEAN NOT NULL DEFAULT false,
    "tags" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lead" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "documentType" TEXT NOT NULL,
    "documentNumber" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_id_key" ON "Product"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Lead_id_key" ON "Lead"("id");
