/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  swcMinify: true,
  images: {
    domains: [
      "ai-image-app.vercel.app",
      "oaidalleapiprodscus.blob.core.windows.net",
    ],
  },
};

module.exports = nextConfig;
