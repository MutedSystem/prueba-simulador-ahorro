import { RECaptchaVerificationDTO } from "../entities/RECaptchaVerificationDTO";

export const recaptchaRepository = {
  verifyRecaptcha: async (token: string): Promise<RECaptchaVerificationDTO> => {
    const key = process.env.GOOGLE_API_KEY;
    const response = await fetch(`https://recaptchaenterprise.googleapis.com/v1/projects/keen-diode-298220/assessments?key=${key}`, {
      method: 'POST',
      body: JSON.stringify({ 
        event: {
          siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
          token: token,
          expectedAction: 'contact',
        },
      }),    
    });
    return response.json();
  }
};