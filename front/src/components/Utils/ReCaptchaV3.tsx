"use client";

import Script from "next/script";

export function RecaptchaScript() {
  const key = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  if (!key) {
    return null;
  }
  return (
    <Script
      src={`https://www.google.com/recaptcha/api.js?render=${key}`}
      strategy="afterInteractive"
    />
  );
}
