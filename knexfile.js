// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      port: 5050,
      user: "postgres",
      password: "evils2",
      database: "task",
    },
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },
};
