import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Nombre requerido").max(80),
  email: z.email("Email inválido"),
  identificationType: z.enum(["CC", "CE", "PP", "NIT", "RUC"], {
    error: "Tipo de identificación requerido",
  }),
  identification: z.string().min(1, "Identificación requerida").max(100),
});
