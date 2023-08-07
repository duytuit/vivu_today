/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "a0.muscache.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.gstatic.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/:slug*",
        destination: `${process.env.REACT_APP_API_URL}:slug*`, // Matched parameters can be used in the destination
        has: [
          {
            type: 'header',
            key: 'Accept',
            value: 'application/json',
          }
          // {
          //   type: 'header',
          //   key: 'Authorization',
          //   value: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYmRjYWRtaW4uZHhtYi52bi9hZG1pbi92Mi9jdXN0b21lcnMiLCJpYXQiOjE2ODc5MjQ1NzksImV4cCI6MTY5MTUyNDU3OSwibmJmIjoxNjg3OTI0NTc5LCJqdGkiOiJTTDJvYVhvbjk0T1NaRGhwIiwic3ViIjoiNzc0NSIsInBydiI6ImI3MmI4MTU1OGEwY2Q4YWE2NTMzYjc5NDAxOWU4YjU2NmY0MTI2NGQifQ.ziSqXDmZ75g6AjBNNVsK_JzivkE7c_-JqMWRUXoy5RU',
          // }
        ],
      },
      {
        source: "/client/upload/:slug*",
        destination: `${process.env.UPLOAD_CDN}upload/:slug*`, // Matched parameters can be used in the destination
      },
    ];
  },
};

module.exports = nextConfig;
