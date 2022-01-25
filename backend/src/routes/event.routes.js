const multer = require("multer");
const upload = multer({
  dest: "/uploads/"
});
module.exports = app => {
    const events = require("../controllers/event.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Event
    router.post("/", upload.single("image"), events.create);
  
    // Retrieve all Events
    router.get("/", events.findAll);

    // Retrieve Top Events
    router.get("/top/:number", events.findTop);    

    // Retrieve a single Event with id
    router.get("/:id", events.findOne);
  
    // Update a Event with id
    router.put("/:id", events.update);
  
    // Delete a Event with id
    router.delete("/:id", events.delete);
  
    // Delete all events
    router.delete("/", events.deleteAll);

    router.get("/image/view/uploads/:id", events.get_image);
  
    app.use('/api/events', router);
  };