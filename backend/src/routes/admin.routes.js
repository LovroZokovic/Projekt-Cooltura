var express = require("express");
var router = express.Router();

const userBL = require("../bl/user");

//http://localhost:2080/admin/createSampleUser
router.get("/createSampleUser", async function(req, res, next) {
  try {
    await userBL.Add("admin", "admin", "admin@gmail.com", "Admin", "Admin", "admin");

    res.json({ success: true });
  } catch (e) {
    res.status(401).json(e.toString());
  }
});

module.exports = router;