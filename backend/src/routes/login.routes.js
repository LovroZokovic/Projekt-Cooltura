module.exports = app => {
    const events = require("../controllers/login.controller.js");
  
    var router = require("express").Router();
  
    router.get("/login", login.login_page);
  
    router.get("/logout", login.logout);
  
    app.use('/api/login', router);
  };