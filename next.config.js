/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gdkuxrgqyqlfdteujssl.supabase.co",
        pathname: "/storage/v1/object/public/project-gallery/**",
      },
    ],
  },
};

module.exports = nextConfig;
