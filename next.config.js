/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["gxwjslpatgrkvsqmthnp.supabase.co"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
    ],
  },
};

module.exports = nextConfig;
