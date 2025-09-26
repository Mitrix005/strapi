module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
  'material-symbols': true,
  prometheus: {
    enabled: true,
    config: {
      collectDefaultMetrics: false, // or { prefix: 'my_app_' }

      labels: {
        app: "my-strapi-app",
        environment: "production"
      },

      server: {
        port: 9000,           // Metrics server port
        host: '0.0.0.0',      // Metrics server host
        path: '/metrics'      // Metrics endpoint path
      },
      normalize: [
        [/\/(?:[a-z0-9]{24,25}|\d+)(?=\/|$)/, '/:id'], // Document IDs or numeric IDs
        [/\/uploads\/[^\/]+\.[a-zA-Z0-9]+/, '/uploads/:file'], // Uploaded files with extensions
      ]
    }
  },
  'preview-button': {
    config: {
      contentTypes: [
        {
          uid: 'api::home.home',
          published: {
            url: 'http://localhost:3000',
          },
        },
        {
          uid: 'api::page.page',
          draft: {
            url: 'http://localhost:3000/api/preview',
            query: {
              type: 'page',
              slug: '{slug}',
            },
          },
          published: {
            url: 'http://localhost:3000/{slug}',
          },
        },
        {
          uid: 'api::post.post',
          draft: {
            url: 'http://localhost:3000/api/preview',
            query: {
              type: 'post',
              slug: '{slug}',
            },
          },
          published: {
            url: 'http://localhost:3000/blog/{slug}',
          },
        },
      ],
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
