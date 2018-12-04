var db = require("../models");


module.exports = function (app) {
     // ============================
// ============HOME/INDEX PAGE=================
//    // ============================
  //home page being rendered with no passing data
  app.get("/", function (req, res) {
    res.render("dashboard");
  });
  app.get("/homepage", function (req, res) {
    res.render("homepage");
  });
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
      res.render("allmembers", {
        msg: "Here are all our members",
        users: dbUsers
      });
    });
  });

  app.get("/user/:id", function (req, res) {
    db.User.findOne({ where: { id: req.params.id } }).then(function (dbUser) {
      res.render("kevinUserDetailedPage", {
        msg: "Users Card",
        users: dbUser,
        interests: dbUser.interests
      });
    });
  });
    // ============================
// ============TRIP PAGES=================
//    // ============================

  app.get("/trips", function (req, res) {
    db.Trip.findAll({}).then(function (dbTrip) {
      res.render("trip", {
        msg: "Here are our trips",
        trip: dbTrip
      });
    });
  });
//using past.handlebars for single trip(temp)
  app.get("/trip/:id", function (req, res) {
    db.Trip.findOne({ where: { id: req.params.id } }).then(function (dbTrip) {
      res.render("past", {
        trip: dbTrip
      });
    });
  });
  
  app.get("/users/trips/upcoming", function (req, res) {
    db.Trip.findAll({}).then(function (dbTrip) {
      res.render("upcomingtrip", {
        msg: "Here are our upcoming trips",
        trip: dbTrip
      });
    });
  });
 
  app.get("/users/trips/past", function (req, res) {
    db.User.findAll({}).then(function (dbUsers) {
      res.render("past", {
        msg: "Here are our past trips",
        trip: dbUsers
      });
    });
  });
 
    // ============================
// ============RATING PAGE=================
//    // ============================
//NO APIT FOR RATING RIGHT NOW
  app.get("/rating", function (req, res) {
    res.render("rating");
  });

   // ============================
// ============404 PAGE=================
//    // ============================
  app.get("*", function (req, res) {
    res.render("404");
  });
};
