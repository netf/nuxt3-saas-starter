// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [process.env.NUXT_UI_PRO_PATH || "@nuxt/ui-pro"],
  build: {
    transpile: ["jsonwebtoken"],
  },
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxt/fonts",
    "@nuxthq/studio",
    "@vueuse/nuxt",
    "nuxt-og-image",
    "@unlighthouse/nuxt",
    "nuxt-security",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
    "@nuxtjs/sitemap",
    "@nuxtjs/partytown",
    "@sidebase/nuxt-auth",
  ],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  unlighthouse: {
    scanner: {
      device: "desktop",
    },
  },
  partytown: {
    // For google analytics
    forward: ["dataLayer.push"],
  },
  security: {
    corsHandler: false,
    headers: false,
  },
  runtimeConfig: {
    // Keys within public, will be also exposed to the client-side
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "http://localhost:3000",
      LOG_ENV: process.env.LOG_ENV,
    },
  },
  colorMode: {
    preference: "light",
  },
  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
    "components:extend": (components) => {
      const globals = components.filter((c) =>
        ["UButton"].includes(c.pascalName)
      );

      globals.forEach((c) => (c.global = true));
    },
  },
  ui: {
    icons: ["heroicons", "simple-icons"],
  },
  // sidebase/nuxt-auth module configuration
  auth: {
    baseURL: "/api/auth",
    provider: {
      type: "refresh",
      // refreshOnlyToken: true,
      endpoints: {
        getSession: { path: "/user" },
        refresh: { path: "/refresh", method: "post" },
      },
      pages: {
        login: "/",
      },
      token: {
        signInResponseTokenPointer: "/token/accessToken",
        maxAgeInSeconds: 60 * 5, // 5 min
        sameSiteAttribute: "lax",
      },
      refreshToken: {
        signInResponseRefreshTokenPointer: "/token/refreshToken",
        refreshRequestTokenPointer: "/refreshToken",
      },
    },
    globalAppMiddleware: {
      isEnabled: true,
    },
  },
  routeRules: {
    "/api/search.json": { prerender: true },
    "/docs": { redirect: "/docs/getting-started", prerender: false },
  },
  ssr: true,
  devtools: {
    enabled: true,
  },
  typescript: {
    shim: false,
    tsConfig: {
      exclude: ["node_modules", "dist"],
      compilerOptions: {
        strict: true,
        types: ["@sentry/vue"],
      },
    },
  },
  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },
});
