var db = require("../models");


module.exports = function (app) {

   // ============================
// ============USER PAGES=================
//    // ============================
   app.get("/register", function (req, res) {
    db.User.findAll({}).then(function (dbUsers) {
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
        user: dbUser,
        // interests: dbUser.interests
      });
    });
  });
    // ============================
// ============TRIP PAGES=================
//    // ============================
app.get("/plantrip", function (req, res) {
  // reference req.user or req.session to get logged in user
  db.Trip.findAll({}).then(function (dbTrip) {
    res.render("plantrip", {
      msg: "Plan a new trip",
      trip: dbTrip
      // user: <userobj from req.user or req.session>
    });
  });
});



//12/06/18 CHI below is receiving data from two sources. one from app.GET(/api/trips) in trip-api-routes, all the data from api/trips (stored trips and users data)
//The second part is from app.POST(/api/tirps) in trip-api-routes, the data user just entered in /plantrip page. 
//then is comparing user's destination (or where they are traveling to) with hometown of a user. This will at least pull the matching person.   
  app.get("/trips", function (req, res) {
    console.log("HIIIIII", req.query)



    db.User.findAll({
      where: {
        hometown: req.query.destination
      },
        include: [db.Trip]
    }).then(function (dbTrip) {
      console.log("BYEEEEEEEEE", dbTrip)


      res.render("alltrips", {
        msg: "Here are our trips",
        trip: dbTrip
      });
    });

  });
  //12/06/18 change stops here

 

//using singletrip.handlebars for single trip(temp)
  app.get("/trip/:id", function (req, res) {
    db.Trip.findOne({ where: { id: req.params.id } }).then(function (dbTrip) {
      res.render("singletrip", {
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
// ============HOME & INDEX PAGE=================
//    // ============================
  //home page being rendered with no passing data
  app.get("/", function (req, res) {
    db.User.findAll({}).then(function (dbUsers) {
      res.render("index", {
        msg: "Create a User Profile",
        users: dbUsers
      });
    });
  });
  app.get("/homepage", function (req, res) {
    res.render("homepage");
  });
   // ============================
// ============404 PAGE=================
//    // ============================
  app.get("*", function (req, res) {
    res.render("404");
  });
};
