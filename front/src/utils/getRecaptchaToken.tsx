export async function getRecaptchaToken(action: string) {
    await window.grecaptcha.ready();
    return window.grecaptcha.execute(
      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
      { action }
    );
  }
  