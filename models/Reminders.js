const Sequelize = require("sequelize");
const database = require("../database/connection");

const reminders = database.define("REMINDERS", {
  id: {
    type: Sequelize.TEXT,
    allowNull: false,
    primaryKey: true,
  },
  user_id: {
    type: Sequelize.TEXT,
    allowNull: false,

  },
  title: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  start: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  end: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  color: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = reminders;
