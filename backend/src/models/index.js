const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.POSTGRES_DB, dbConfig.POSTGRES_USER, dbConfig.POSTGRES_PASSWORD, {
  host: dbConfig.DB_HOST,
  operatorsAliases: false,
  port: dbConfig.DB_PORT,
  dialect: 'postgres',
  
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.events = require("./event.model.js")(db.sequelize, db.Sequelize);
db.users = require("./user.model.js")(db.sequelize, db.Sequelize);
db.role = require("./role.model.js")(db.sequelize, db.Sequelize);
db.session = require("./session.model.js")(db.sequelize, db.Sequelize);

//db.ROLES = ["user", "admin", "organiser"];

module.exports = db;
module.exports = Sequelize;


