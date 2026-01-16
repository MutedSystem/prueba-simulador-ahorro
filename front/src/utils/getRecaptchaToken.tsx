export async function getRecaptchaToken(action: string) {
  if (!window.grecaptcha) {
    throw new Error("reCAPTCHA aún no está cargado");
  }

  await new Promise<void>((resolve) =>
    window.grecaptcha.ready(resolve)
  );

  return window.grecaptcha.execute(
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
    { action }
  );
}
