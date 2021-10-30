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
      //res.json({ message:'All events'});
};

// Find a single Event with an id
exports.findOne = (req, res) => {
  const id = 4;

  Event.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tutorial with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
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

