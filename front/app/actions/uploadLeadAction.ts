'use server';

import { UploadLeadDTO } from "@/src/entities/UploadLeadDTO";
import { UploadLeadState } from "@/src/entities/UploadLeadState";
import { leadsRepository } from "@/src/repositories/leads.repository";
import { recaptchaRepository } from "@/src/repositories/recaptcha.repository";
import { contactSchema } from "@/src/schemas/uploadLeadSchema";

export async function uploadLeadAction(prevState: UploadLeadState, formData: FormData): Promise<UploadLeadState> {

  const { runs } = prevState;
  const nextRuns = runs + 1;

  const raw = Object.fromEntries(formData.entries());
  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    return { success: false, error: parsed.error.message, runs: nextRuns } as UploadLeadState;
  }

  const data = Object.fromEntries(formData) as unknown as UploadLeadDTO;
  const { recaptchaToken } = data;
  if (!recaptchaToken) {
    return { success: false, error: 'Token de reCAPTCHA requerido', runs: nextRuns } as UploadLeadState;
  }
  const recaptchaResponse = await recaptchaRepository.verifyRecaptcha(recaptchaToken);

  if (!recaptchaResponse.tokenProperties.valid) {
    return { success: false, error: 'Verificación de reCAPTCHA fallida', runs: nextRuns } as UploadLeadState;
  }

  const leadId = await leadsRepository.createLead(data);

  if (!leadId) {
    return { success: false, error: 'Error al crear el lead', runs: nextRuns } as UploadLeadState;
  }

  return { success: true, leadId, runs: nextRuns } as UploadLeadState;
}