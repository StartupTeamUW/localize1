var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/examples", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function (req, res) {
    db.Example.create(req.body).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
    });
  });
  
  // START OF TRIP

  // app.get("/api/trips", function (req, res) {
  //   db.Trip.findAll({}).then(function (dbTrips) {
  //     res.json(dbTrips);
  //   });
  // });

  // // Create a new trip
  // app.post("/api/trips", function (req, res) {
  //   db.Trip.create(req.body).then(function (dbTrip) {
  //     res.json(dbTrip);
  //   });
  // });

  // // Delete a trip by id
  // app.delete("/api/trips/:id", function (req, res) {
  //   db.Trip.destroy({ where: { id: req.params.id } }).then(function (dbTrip) {
  //     res.json(dbTrip);
  //   });
  // });
};
