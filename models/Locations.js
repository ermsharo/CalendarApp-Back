const Sequelize = require("sequelize");
const database = require("../database/connection");

const reminders = database.define("LOCATIONS", {
  id: {
    type: Sequelize.TEXT,
    allowNull: false,
    primaryKey: true,
  },
  state_name: {
    type: Sequelize.TEXT,
    allowNull: false,

  },
  city_name: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  lat: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  long: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = reminders;
