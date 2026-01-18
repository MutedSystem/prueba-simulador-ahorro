import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Nombre requerido").max(80),
  email: z.email("Email inválido"),
  documentType: z.enum(["CC", "CE", "PP", "NIT", "RUC"], {
    error: "Tipo de identificación requerido",
  }),
  documentNumber: z.string().min(1, "Identificación requerida").max(100),
  termsAndConditions: z.string().refine((value) => value === "on", {
    message: "Debes aceptar los términos y condiciones",
  }),
});
