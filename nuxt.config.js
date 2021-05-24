export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Tanqueray ",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      {
        hid: "apple-mobile-web-app-title",
        name: "apple-mobile-web-app-title",
        content: "Tanqueray",
      },
      {
        hid: "application-name",
        name: "application-name",
        content: "Tanqueray",
      },
      {
        hid: "msapplication-TileColor",
        name: "msapplication-TileColor",
        content: "#afc2b3",
      },
      {
        hid: "msapplication-config",
        name: "msapplication-config",
        content: "/favicon/browserconfig.xml",
      },
      { hid: "theme-color", name: "theme-color", content: "#2c4e1e" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: "~/assets/scss/app.scss" }],

  // Resources available to scoped component styles
  styleResources: {
    scss: [
      "~/assets/scss/abstracts/variables.scss",
      "~/assets/scss/abstracts/functions.scss",
      "~/assets/scss/abstracts/mixins.scss",
    ],
  },

  loading: {
    color: "#2c4e1e",
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/breakpoints.js"],

  // Server middleware:
  serverMiddleware: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: ["~/components"],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  eslint: {
    fix: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/toast",
    "@nuxtjs/svg",
    "@nuxtjs/style-resources",
    "nuxt-user-agent",
  ],

  axios: {
    baseURL: "",
  },

  toast: {
    position: "bottom-right",
    duration: 2000,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  /*
   ** Build configuration
   */
  build: {
    transpile: ["gsap"],
    postcss: {
      plugins: {
        "postcss-import": {},
        "postcss-preset-env": {
          stage: 3,
          features: {
            "color-mod-function": { unresolved: "warn" },
            "nesting-rules": true,
            "custom-media-queries": {
              preserve: false,
            },
            "custom-properties": {
              preserve: false,
            },
          },
        },
      },
    },

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
