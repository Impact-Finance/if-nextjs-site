declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CAPTCHA_SITE_KEY: string;
      DB_CLIENT: string;
      GOOGLE_PW: string;
    }
  }
}

export {};
