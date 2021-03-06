const { Router } = require("express");
const db = require("../models");
const Event = db.events;
const Interest = db.interests;
const Grade = db.grades;
const Op = db.Sequelize.Op;
var router = require("express").Router();

// Create and Save a new Event
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }


  // Create an Event
  const event = {
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    time: req.body.time,
    image: JSON.stringify({ mime: req.file.mimetype, path: req.file.path })
  };

  // Save Event in the database
  Event.create(event)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Event."
      });
    });
};

// Retrieve all Events from the database.
exports.findAll = async (req, res) => {
  try {
    const events = await Event.findAll();
    const interests = await Interest.findAll({
      where: {
        event_id: events.map((event) => event.id),
      },
    });

    const events_ = JSON.parse(JSON.stringify(events));
    const interests_ = JSON.parse(JSON.stringify(interests));

    const eventById = events_.reduce((acc, a) => ({ ...acc, [a.id]: 0 }), {});
    for (const interest of interests_) {
      eventById[interest.event_id] += 1;
    }

    res.send(events_.map((event) => ({ ...event, interested: eventById[event.id] })));
  } catch (err) {
    console.error("FIND ALL ERROR", err);
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving events."
    });
  }
};

// Find a single Event with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Event.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Event with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Event with id=" + id
      });
    });
};

// Update a Event by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Event.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Event was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Event with id=${id}. Maybe Event was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Event with id=" + id
      });
    });
};

// Delete a Event with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Event.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Event was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Event with id=${id}. Maybe Event was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Event with id=" + id
      });
    });

};

// Delete all Events from the database.
exports.deleteAll = (req, res) => {
  Event.destroy({
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


// Retrieve Top Events from the database.
exports.findTop = function () {
  Topevents = Grade.findAll({
    // Add order conditions here....
    order: [
      ['grade', 'DESC'],
      ['event_id', 'ASC'],
    ],
    attributes: ["event_id"],
    limit: number
  })
  return res.json(Event.findAll({ where: { id: Topevents } }));
};

exports.get_image = async (req, res) => {
  const id = req.params.id;
  const event = await Event.findByPk(id);
  const image = JSON.parse(event.image);
  res.type(image.mime);
  res.sendFile(image.path);
};