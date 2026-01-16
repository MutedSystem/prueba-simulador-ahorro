'use server';

import { UploadLeadDTO } from "@/src/entities/UploadLeadDTO";
import { UploadLeadState } from "@/src/entities/UploadLeadState";
import { recaptchaRepository } from "@/src/repositories/recaptcha.repository";

export async function uploadLeadAction(_: UploadLeadState, formData: FormData): Promise<UploadLeadState> {
    console.log('uploadLeadAction');
    const data = Object.fromEntries(formData) as unknown as UploadLeadDTO;
    const { recaptchaToken } = data;
    const recaptchaResponse = await recaptchaRepository.verifyRecaptcha(recaptchaToken);

    if (!recaptchaResponse.tokenProperties.valid) {
        return { success: false, error: 'Verificación de reCAPTCHA fallida' } as UploadLeadState;
    }

    return { success: true } as UploadLeadState;
}