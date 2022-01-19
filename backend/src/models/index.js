const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  operatorsAliases: 0,
  port: dbConfig.PORT,
  dialect: 'postgres',
  sync: { force: true },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.events = require("./event.model.js")(db.sequelize, db.Sequelize);
db.users = require("./user.model.js")(db.sequelize, db.Sequelize);
db.roles = require("./role.model.js")(db.sequelize, db.Sequelize);
db.sessions = require("./session.model.js")(db.sequelize, db.Sequelize);


module.exports = db;



