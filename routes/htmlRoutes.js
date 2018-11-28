var db = require("../models");

module.exports = function (app) {
  // Load index page

  app.get("/", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/trip", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("trip", {
        // msg: "Welcome!",
        // examples: dbExamples
      });
    });
  });

  app.get("/profile", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("profile", {
        imageURL: "https://www.fillmurray.com/200/200",
        name: "Kevin",
        city: "Chicago",
        state: "Illinois",
        aboutMe: "Just a guy lorem ip[sum blahbiddy boo And I came here to party in every city in the United States!"
      });
    });
  });

  app.get("/pastTrip", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("pastTrip", {
        // msg: "Welcome!",
        // examples: dbExamples
      });
    });
  });

  app.get("/users/", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("user_survey", {
        msg: "Create a new User Profile",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });
  // added trip
  app.get("/trip", function (req, res) {
    db.Trip.findAll({}).then(function (dbTrips) {
      res.render("trip", {
        msg: "Here are our trips",
        trips: dbTrips
      });
    });
  });
  // app.get("/trip/:id", function (req, res) {
  //   db.Trip.findOne({ where: { id: req.params.id } }).then(function (dbTrip) {
  //     res.render("trip", {
  //       trip: dbTrip
  //     });
  //   });
  // });
  //end of trip

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
