/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // {
      //   protocol: "http",
      //   hostname: "localhost",
      // },
      {
        protocol: "https",
        hostname: "hippothesis.up.railway.app",
        pathname: "/media/**",
      },
    ],
  },
};

module.exports = nextConfig;
