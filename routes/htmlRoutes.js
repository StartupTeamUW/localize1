var db = require("../models");

module.exports = function (app) {
  // Load index pages
  
app.get("/", function (req, res) {
  db.Example.findAll({}).then(function (dbExamples) {
    res.render("dashboard", {
      msg: "Welcome!",
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

  // added trip pages
  app.get("/trip", function (req, res) {
    db.Trip.findAll({}).then(function (dbTrips) {
      res.render("trip", {
        msg: "Here are our trips",
        trip: dbTrips
      });
    });
  });
  app.get("/trip/:id", function (req, res) {
    db.Trip.findOne({ where: { id: req.params.id } }).then(function (dbTrip) {
      res.render("pastTrip", {
        trip: dbTrip
      });
    });
  });
  //end of trip

  // user pages

  app.get("/user", function (req, res) {
    db.Trip.findAll({}).then(function (dbUsers) {
      res.render("user_profile", {
        msg: "Users List here",
        user: dbUsers
      });
    });
  });
  app.get("/user/:id", function (req, res) {
    db.Trip.findOne({ where: { id: req.params.id } }).then(function (dbUser) {
      res.render("userCard", {
        msg: "Users Card",
        user: dbUser
      });
    });
  });

  // end of user pages

  


  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
