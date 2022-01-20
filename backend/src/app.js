const express = require("express");
const bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const flash = require('connect-flash')
const session = require('express-session');
dotenv.config();
const { logger, } = require('./middlewares/auth.middleware');
const path = require('path');
const { Sequelize, DataTypes, Model } = require('sequelize');

const app = express();

app.set('views', path.join(__dirname, 'views'))
//app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.APP_PORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
app.set('trust proxy', 1);
app.use(express.json());
app.use(cookieParser());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
  next();
});


const db = require("./models");

(async () => {
  try {
    await db.sequelize.sync({ force: true, logging: console.log }).then(() => {
    console.log(`Database & tables created!`)
    });
  } catch (e) {
    console.log(e);
  }

})();


app.get('/', (req, res) => {
  res.json({ message: 'Hello world\n' });
});

require('./routes/auth.routes.js')(app);
require('./routes/event.routes.js')(app);
require('./routes/comment.routes.js')(app);
require('./routes/grade.routes.js')(app);
require('./routes/interest.routes.js')(app);
require('./routes/role.routes.js')(app);
require('./routes/user.routes.js')(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(logger);

app.use(
  session({
    // Key we want to keep secret which will encrypt all of our information
    secret: process.env.SECRET,
    // Should we resave our session variables if nothing has changes which we dont
    resave: false,
    // Save empty value if there is no vaue which we do not want to do
    saveUninitialized: false
  })
);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')))
