const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const flash = require('connect-flash')
const session = require('express-session');
dotenv.config();
const {logger, } = require('./middlewares/auth.middleware');


const app = express();
const PORT = process.env.APP_PORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
var corsOptions = {
    origin: process.env.CORS_LINK
};
  
app.use(cors(corsOptions));
app.set('trust proxy', 1); 
app.use(express.json());
app.use(cookieParser());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
  next();
});


const db = require("./models");
  
app.get('/', (req, res) => {
    res.json({ message:'Hello world\n'});
});

app.use(require('./routes/auth.routes.js'));
app.use(require('./routes/event.routes.js'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(logger);

// Prepare DB
db.connection.sync();

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

app.use(bodyParser.json());
app.use(flash());


app.use(function(req, res, next){
  res.locals.message = req.flash('message');
  next();
});
