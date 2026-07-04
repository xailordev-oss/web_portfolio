/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/web_portfolio',
  images: {
    unoptimized: true,   // ✅ ເພີ່ມແຖວນີ້
  },
};

module.exports = nextConfig;