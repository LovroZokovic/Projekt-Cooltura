const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;
const userBL = require("./../bl/user");
const sessionBL = require("./../bl/session");
const Auth = require("../util/authenticate");

exports.login_page = (req, res) => {
    res.json({
      title: 'Prijava',
      //user: req.session.user,
      linkActive: 'login',
      err: undefined
  });
};

exports.log_in = async function(req, res, next) {
  passport.authenticate("local", {
    successRedirect: "/users/dashboard",
    failureRedirect: "/users/login",
    failureFlash: true
  })
};

exports.logout = (req, res) => {
  req.logout();
  res.render("index", { message: "You have logged out successfully" });
};

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/users/dashboard");
  }
  next();
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/users/login");
}