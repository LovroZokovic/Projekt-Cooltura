module.exports = app => {
    const interests = require("../controllers/interest.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Interest
    router.post("/", interests.create);
  
    // Retrieve all interests
    router.get("/", interests.findAll);

    // Retrieve interests for event
    router.get("/event/:id", interests.findEvent);    

    // Retrieve interests for user
    router.get("/user/:id", interests.findUser);    

    // Retrieve a single Interest with id
    router.get("/:id", interests.findOne);
  
    // Update a interests with id
    router.put("/:id", interests.update);
  
    // Delete a interests with id
    router.delete("/:id", interests.delete);
  
    // Delete all interests
    router.delete("/", interests.deleteAll);
  
    app.use('/api/interests', router);
  };