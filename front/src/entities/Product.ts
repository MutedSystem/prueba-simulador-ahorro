export type Product = {
  id: string;
  nombre: string;
  codigo: string;
  tipo: string;
  descripcionCorta: string;
  descripcionLarga: string;
  moneda: string;
  riesgo: 'bajo' | 'medio' | 'alto';
  tasaInteresAnual?: number;
  rentabilidadEsperadaAnual?: number;
  plazoMeses?: number;
  liquidezDias?: number;
  montoMinimo: number;
  destacado: boolean;
  tags: string[];
}
