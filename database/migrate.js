const readline = require("readline");
const knex = require("knex");
const config = require("./knexfile");

const environment = "development";
const knexInstance = knex(config[environment]);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function migrateUp() {
  return knexInstance.migrate
    .latest(migrateUp)
    .then(() => {
      console.log("Migrations ran successfully");
      process.exit(0);
    })
    .catch((error) => {
      console.error("Error running migrations:", error);
      process.exit(1);
    });
}

function migrateDown() {
  return knexInstance.migrate
    .rollback(migrateDown)
    .then(() => {
      console.log("Migrations rolled back successfully");
      process.exit(0);
    })
    .catch((error) => {
      console.error("Error rolling back migrations:", error);
      process.exit(1);
    });
}

function promptMigrationAction() {
  rl.question(
    "Which migration action do you want to perform? (up/down): ",
    (answer) => {
      if (answer === "up") {
        migrateUp();
      } else if (answer === "down") {
        migrateDown();
      } else {
        console.log(
          'Invalid migration action. Please enter either "up" or "down".'
        );
        promptMigrationAction();
      }
    }
  );
}

promptMigrationAction();
