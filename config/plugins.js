module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
  upload: {
    config: {
      provider: "local",
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
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
