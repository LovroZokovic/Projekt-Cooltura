module.exports = app => {
    const comments = require("../controllers/comment.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Comment
    router.post("/", comments.create);
  
    // Retrieve all comments
    router.get("/", comments.findAll);

    // Retrieve comments for event
    router.get("/event/:id", comments.findEvent);    

    // Retrieve comments for user
    router.get("/user/:id", comments.findUser);    

    // Retrieve a single comment with id
    router.get("/:id", comments.findOne);
  
    // Update a comments with id
    router.put("/:id", comments.update);
  
    // Delete a comments with id
    router.delete("/:id", comments.delete);
  
    // Delete all comments
    router.delete("/", comments.deleteAll);
  
    app.use('/api/comments', router);
  };