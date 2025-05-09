/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /libquery_engine-rhel-openssl-1.0.x.so.node$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'prisma/generated/clientShop',
        publicPath: '/prisma/generated/clientShop',
      },
    });
    return config;
  },
};

export default nextConfig;
