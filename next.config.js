/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    CAPTCHA_SITE_KEY: process.env.CAPTCHA_SITE_KEY,
    DB_CLIENT: process.env.DB_CLIENT,
    GOOGLE_PW: process.env.GOOGLE_PW,
  },
};

module.exports = nextConfig;
