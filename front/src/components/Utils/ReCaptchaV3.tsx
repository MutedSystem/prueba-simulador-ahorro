"use client";

import { getRecaptchaToken } from "@/src/utils/getRecaptchaToken";
import Script from "next/script";

export function RecaptchaScript() {
  const key = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  async function setRecaptchaToken() {
    const token = await getRecaptchaToken("contact");
    document.getElementById("recaptchaToken")?.setAttribute("value", token);
  }
  if (!key) {
    return null;
  }
  return (
    <Script
      src={`https://www.google.com/recaptcha/api.js?render=${key}`}
      onLoad={setRecaptchaToken}
      strategy="afterInteractive"
    />
  );
}
