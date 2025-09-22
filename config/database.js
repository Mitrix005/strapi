module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: env('DATABASE_URL'),
    debug: true,
    pool: { min: 0, max: 7 },
  },
});
