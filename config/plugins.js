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

      // mimeTypes that converts to WebP. Default is ['image/png', 'image/jpeg', 'image/jpg']

      mimeTypes: undefined,

      options: {

        // WebP options: https://sharp.pixelplumbing.com/api-output#webp

      },

    },

  },
});
