var db = require("../models");


module.exports = function (app) {

  // ============================
  // ============USER PAGES=================
  //    // ============================
  app.get("/register", function (req, res) {
    db.User.findAll({}).then(function (dbUsers) {
      // console.log(res.body);
      res.render("user_form", {
        msg: "Create a User Profile",
        users: dbUsers
      });
    });
  });

  app.get("/users", function (req, res) {
    db.User.findAll({}).then(function (dbUsers) {
      res.render("allusers", {
        msg: "Here are all our members",
        users: dbUsers
      });
    });
  });

  app.get("/user/:id", function (req, res) {
    db.User.findOne({ where: { id: req.params.id } }).then(function (dbUser) {
      res.render("user_dashboard", {
        msg: "Users Card",
        user: dbUser,
        interests: dbUser.interests
      });
    });
  });

  // ============================
  // ============TRIP PAGES=================
  //    // ============================

  app.get("/new_trip", function (req, res) {
    db.Trip.findAll({}).then(function (dbTrip) {
      res.render("trip_form", {
        msg: "Here are our trips",
        trip: dbTrip
      });
    });
  });

  app.get("/trips", function (req, res) {
    db.Trip.findAll({}).then(function (dbTrip) {
      res.render("trips", {
        msg: "Here are our trips",
        trip: dbTrip
      });
    });
  });

  app.get("/trip/:id", function (req, res) {
    db.Trip.findOne({ where: { id: req.params.id } }).then(function (dbTrip) {
      res.render("trip", {
        trip: dbTrip
      });
    });
  });

  // ============================
  // ============HOME & INDEX PAGE=================
  //    // ============================
  //home page being rendered with no passing data
  app.get("/", function (req, res) {
    db.User.findAll({}).then(function (dbUsers) {
      res.render("homepage", {
        msg: "Create a User Profile",
        users: dbUsers
      });
    });
  });

  // ============================
  // ============404 PAGE=================
  //    // ============================
  app.get("*", function (req, res) {
    res.render("404");
  });
};
