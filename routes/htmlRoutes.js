var db = require("../models");
var i;

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

  app.get("/homepage", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("homepage", {
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
    db.User.findAll({}).then(function (dbUsers) {
      console.log(res.body);
      res.render("user_profile", {
        msg: "Users List here",
        users: dbUsers
      });
    });
  });

  app.get("/user/:id", function (req, res) {
    db.User.findOne({ where: { id: req.params.id } }).then(function (dbUser) {
      res.render("kevinUserDetailedPage", {
        msg: "Users Card",
        user: dbUser,
        languages: dbUser.languages[i],
        countries: dbUser.countries[i],
        shares: dbUser.what_I_share[i],
        interests: dbUser.interests[i]
      });
    });
  });

  // end of user pages




  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
