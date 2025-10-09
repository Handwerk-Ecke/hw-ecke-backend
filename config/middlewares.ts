export default [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:", "http:"],
          "img-src": ["'self'", "data:", "blob:", "https://*"],
          "media-src": ["'self'", "data:", "blob:", "https://*"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      origin: [
        "https://hw-ecke.de",
        "https://handmade-shop-eight.vercel.app",
        "http://localhost:3000",
        "http://localhost:3001",
      ],
      headers: "*",
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      credentials: true,
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
