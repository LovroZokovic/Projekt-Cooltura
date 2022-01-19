const { Router } = require("express");
const db = require("../models");
const Grade = db.grades;
const Op = db.Sequelize.Op;
var router = require("express").Router();

// Create and Save a new Grade
exports.create = (req, res) => {
  // Validate request
  if (!req.body.event.id || !req.body.user.id || !req.body.grade) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create an Grade
  const grade = {
    event_id: req.body.event_id,
    user_id: req.body.user.id
  };

  // Save Grade in the database
  Grade.create(grade)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Grade."
      });
    });
};

// Retrieve all Grades from the database.
exports.findAll = (req, res) => {
    Grade.findAll()
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

// Find a single Grade with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Grade.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Grade with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Grade with id=" + id
      });
    });
};

// Update a Grade by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Grade.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Grade was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Grade with id=${id}. Maybe Grade was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Grade with id=" + id
      });
    });
};

// Delete a Grade with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Grade.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Grade was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Grade with id=${id}. Maybe Grade was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Grade with id=" + id
      });
    });

};

// Delete all Events from the database.
exports.deleteAll = (req, res) => {
  Grade.destroy({
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

// Get all grades for one event
exports.findEvent = (req, res) => {
  const id = req.params.id;

  Grade.findAll({
    where:{event_id: id}})
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Grade for Event with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Grade for Event with id=" + id
      });
    });
};

// Get all grades from one user
exports.findUser = (req, res) => {
  const id = req.params.id;

  Grade.findAll({
    where:{user_id: id}})
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Grades for User with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Grades for User with id=" + id
      });
    });
};