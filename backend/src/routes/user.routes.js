module.exports = app => {
    const users = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all users
    router.get("/", users.findAll);

    // Retrieve users interested for an event
    router.get("/event/:id", users.findEvent);    

    // Retrieve users past interested for an event
    router.get("/events/past/:id", users.findPastEvents);    

     // Retrieve users future interested for an event
     router.get("/events/future/:id", users.findFutureEvents);  

    // Retrieve a single user with id
    router.get("/:id", users.findOne);
  
    // Update a users with id
    router.put("/:id", users.update);
  
    // Delete a users with id
    router.delete("/:id", users.delete);
  
    // Delete all users
    router.delete("/", users.deleteAll);
  
    app.use('/api/users', router);
  };