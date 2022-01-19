module.exports = app => {
    const grades = require("../controllers/grade.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Grade
    router.post("/", grades.create);
  
    // Retrieve all grades
    router.get("/", grades.findAll);

    // Retrieve grades for event
    router.get("/event/:id", grades.findEvent);    

    // Retrieve grades for user
    router.get("/user/:id", grades.findUser);    

    // Retrieve a single Grade with id
    router.get("/:id", grades.findOne);
  
    // Update a grades with id
    router.put("/:id", grades.update);
  
    // Delete a grades with id
    router.delete("/:id", grades.delete);
  
    // Delete all grades
    router.delete("/", grades.deleteAll);
  
    app.use('/api/grades', router);
  };