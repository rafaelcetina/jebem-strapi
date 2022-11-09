const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "jebem"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "rafael123"),
      schema: env("DATABASE_SCHEMA", "public"), // Not required
      /*
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
      },
      */
      ssl: env.bool("DATABASE_SSL", false),
    },
    debug: false,
  },
});
