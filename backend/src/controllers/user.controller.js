const { Router } = require("express");
const db = require("../models");
const User = db.users;
const Event = db.events;
const Interest = db.interests;
const Op = db.Sequelize.Op;
var router = require("express").Router();


// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    User.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      });
      
};

// Find a single User with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find User with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id
      });
    });
};

// Update a User by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  User.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  User.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });

};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
  User.destroy({
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

exports.findEvent = (req, res) => {
  const id = req.params.id;

  User.findAll({where:{event_id: id}})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving events."
      });
    });
    
};

function parseJwt (token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
};


exports.findFutureEvents = async (req, res) => {
  const id = req.params.id;
  const today = new Date();
  try {
    const events = await Event.findAll(
      {where:{date: {
        [Op.gt]: today,
       }}}
    );
    const interests = await Interest.findAll(
      {where:{user_id: id}}
    );

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

exports.findPastEvents = async (req, res) => {
  const id = req.params.id;
  const today = new Date();
  try {
    const events = await Event.findAll(
      {where:{date: {
        [Op.lt]: today,
       }}}
    );
    const interests = await Interest.findAll(
      {where:{user_id: id}}
    );

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