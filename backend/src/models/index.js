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
db.role = require("./role.model.js")(db.sequelize, db.Sequelize);
db.session = require("./session.model.js")(db.sequelize, db.Sequelize);

sequelize
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
 .catch(err => {
 console.error('Unable to connect to the database:', err);
});
//db.ROLES = ["user", "admin", "organiser"];
//db.sync({});
module.exports = db;
//module.exports = sequelize;


