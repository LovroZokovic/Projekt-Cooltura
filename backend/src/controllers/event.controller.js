const db = require("../models");
const Event = db.events;
const Op = db.Sequelize.Op;

// Create and Save a new Event
exports.create = (req, res) => {
  
};

// Retrieve all Events from the database.
exports.findAll = (req, res) => {
    Event.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
};

// Find a single Event with an id
exports.findOne = (req, res) => {
  
};

// Update a Event by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Event with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Events from the database.
exports.deleteAll = (req, res) => {
  
};

