const express = require("express");
const bodyParser = require("body-parser");
var createError = require('http-errors');
var path = require('path');
const cors = require("cors");
const bcrypt = require("bcrypt");
const passport = require("passport");
const flash = require("express-flash");
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require('dotenv');
const session = require('express-session'); // express-sessions
const { v4: uuidv4 } = require('uuid'); // uuid, To call: uuidv4();
const connectEnsureLogin = require('connect-ensure-login'); //authorization
dotenv.config();
//console.log(process.env);
//Create an app
const app = express();

var corsOptions = {
    origin: process.env.CORS_LINT
};
  
app.use(cors(corsOptions));
app.set('trust proxy', 1); 
app.use(session({
  genid: function (req) {
	return uuidv4();
  },
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 24* 60 * 60 * 1000, secure: true } // 1 day
}));

// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
  next();
});
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize.sync({force: true}).then(() => {
  //console.log('Drop and Resync Db');
  initial();
});
  
app.get('/', (req, res) => {
    res.json({ message:'Hello world\n'});
});

require("./routes/event.routes")(app);
require('./routes/auth.routes')(app);
require('./routes/login.routes')(app);
app.use(require('./routes/user.routes.js'));
app.use(require('./routes/admin.routes.js'));



// set port, listen for requests
/*const PORT = process.env.APP_PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
*/

app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());


const initializePassport = require("./passportConfig");

app.use(
  session({
    // Key we want to keep secret which will encrypt all of our information
    secret: process.env.SESSION_SECRET,
    // Should we resave our session variables if nothing has changes which we dont
    resave: false,
    // Save empty value if there is no vaue which we do not want to do
    saveUninitialized: false
  })
);

// Funtion inside passport which initializes passport
app.use(passport.initialize());
// Store our variables to be persisted across the whole session. Works with app.use(Session) above
app.use(passport.session());
app.use(flash());

/* Passport Local Strategy
passport.use(User.createStrategy());

// To use with sessions
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser()); */

function initial() {
  const Role = db.roles;
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "organiser"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}

//const all_routes = require('express-list-endpoints');
//console.log(all_routes(app));
module.exports = app;