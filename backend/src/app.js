const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require('dotenv');
const session = require('express-session'); // express-sessions
const { v4: uuidv4 } = require('uuid'); // uuid, To call: uuidv4();
const passport = require('passport');  // authentication
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
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

// set port, listen for requests
const PORT = process.env.APP_PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

// Passport Local Strategy
passport.use(User.createStrategy());

// To use with sessions
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

function initial() {
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