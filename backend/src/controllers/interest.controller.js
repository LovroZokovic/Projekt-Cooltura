const { Router } = require("express");
const db = require("../models");
const Interest = db.interests;
const Op = db.Sequelize.Op;
var router = require("express").Router();

// Create and Save a new Interest
exports.create = (req, res) => {
  // Validate request
  if (!req.body.user.id || !req.body.interest.id) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create an Interest
  const interest = {
    event_id: req.body.event_id,
    user_id: req.body.user_id,
  };

  // Save Interest in the database
  Interest.create(interest)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Interest."
      });
    });
};

// Retrieve all Interests from the database.
exports.findAll = (req, res) => {
    Interest.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving interests."
        });
      });
      
};

// Find a single Interest with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Interest.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Interest with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Interest with id=" + id
      });
    });
};

// Update a Interest by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Interest.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Interest was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Interest with id=${id}. Maybe Interest was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Interest with id=" + id
      });
    });
};

// Delete a Interest with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Interest.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Interest was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Interest with id=${id}. Maybe Interest was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Interest with id=" + id
      });
    });

};

// Delete all Events from the database.
exports.deleteAll = (req, res) => {
  Interest.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Events were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all events."
      });
    });
};

// Get all interests for one event
exports.findEvent = (req, res) => {
  const id = req.params.id;

  Interest.findAll({
    where:{event_id: id}})
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Interest for event with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Interest for event with id=" + id
      });
    });
};

// Get all interests from one user
exports.findUser = (req, res) => {
  const id = req.params.id;

  Interest.findAll({
    where:{user_id: id}})
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Interest for User with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Interest for User with id=" + id
      });
    });
};