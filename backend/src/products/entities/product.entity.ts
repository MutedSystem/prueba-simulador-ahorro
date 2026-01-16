export class Product {
  id: string;
  nombre: string;
  codigo: string;
  tipo: string;
  descripcionCorta: string;
  descripcionLarga: string;
  moneda: string;
  riesgo: NivelRiesgo;
  tasaInteresAnual?: number;
  rentabilidadEsperadaAnual?: number;
  plazoMeses?: number;
  liquidezDias?: number;
  montoMinimo: number;
  destacado: boolean;
  tags: string[];
}

export enum NivelRiesgo {
  BAJO = 'bajo',
  MEDIO = 'medio',
  ALTO = 'alto',
}
