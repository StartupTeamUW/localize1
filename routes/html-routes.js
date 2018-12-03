var db = require("../models");
var i = 0;

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

  app.get("/user/:id", function (req, res) {
    db.User.findOne({ where: { id: req.params.id } }).then(function (dbUser) {
      res.render("kevinUserDetailedPage", {
        msg: "Users Card",
        user: dbUser,
        interests: dbUser.interests
      });
    });
  });

    // ============================
// ============TRIP PAGES=================
//    // ============================

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
