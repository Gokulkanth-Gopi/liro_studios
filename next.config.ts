import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disabled in production to protect source code
  productionBrowserSourceMaps: false,
  // Image optimization
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Compression
  compress: true,
  
  // Experimental features for performance
  experimental: {
    optimizePackageImports: ['@gsap/react', 'gsap', 'swiper', 'react-bootstrap'],
  },

  // Turbopack configuration (empty to allow build)
  turbopack: {},

  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Production optimizations
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
      };
    }

    return config;
  },

  // Redirect accidentally exposed internal pages-router paths to 404
  async redirects() {
    return [
      { source: '/homes/:path*', destination: '/not-found', permanent: false },
      { source: '/contacts/:path*', destination: '/not-found', permanent: false },
      { source: '/services/Branding/:path*', destination: '/BrandingService', permanent: true },
      { source: '/services/DigitalMarketing/:path*', destination: '/DigitalMarketingService', permanent: true },
      { source: '/services/SocialMediaMarketing/:path*', destination: '/SocialMediaMarketingService', permanent: true },
      { source: '/services/service-main/:path*', destination: '/service', permanent: true },
      { source: '/portfolios/:path*', destination: '/not-found', permanent: false },
      { source: '/faq/:path*', destination: '/faq-light', permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|gif|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
