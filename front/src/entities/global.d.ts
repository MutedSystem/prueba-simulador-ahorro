export {};

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb?: () => void) => Promise<void> | void;
      execute: (
        siteKey: string,
        options: { action: string }
      ) => Promise<string>;
    };
  }
}
