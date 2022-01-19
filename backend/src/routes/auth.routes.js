module.exports = app => {
    const auths = require("../controllers/auth.controller.js");
    const {_, auth} = require('../middlewares/auth.middleware');

    var router = require("express").Router();

    router.post("/signup", auths.signup);

    router.post("/login", auths.login);

    router.get("/login", auths.login_page);

    router.get("/signup", auths.signup_page);

    router.post("/changepassword", auth, auths.changepassword);

    router.post("/verifypassword", auth, auths.verifypassword);

    app.use('/api/auth', router);
};