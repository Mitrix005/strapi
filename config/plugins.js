module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
  'material-symbols': true,
  upload: {
    config: {
      provider: "local",
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  "strapi-csv-import-export": {
    config: {
      authorizedExports: ["api::machine.machine"],
      authorizedImports: ["api::machine.machine"]
    }
  },
  'webp-converter': {
    enabled: true,
    config: {
      mimeTypes: undefined,
      options: {
      },
    },
  },
  'drag-drop-content-types-strapi5': {
    enabled: true,
  },
});
