const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require('dotenv');
dotenv.config();
console.log(process.env);
//Create an app
const app = express();

var corsOptions = {
    origin: process.env.CORS_LINT
};
  
app.use(cors(corsOptions));
  
// parse requests of content-type - application/json
app.use(bodyParser.json());
  
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize.sync();
  
app.get('/', (req, res) => {
    res.json({ message:'Hello world\n'});
});

require("./routes/event.routes")(app);

// set port, listen for requests
const PORT = process.env.APP_PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

