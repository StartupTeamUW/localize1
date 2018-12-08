var db = require("../models");




module.exports = function (app) {
     // ============================
// ============HOME/INDEX PAGE=================
//    // ============================
  //home page being rendered with no passing data
  // app.get("/", function (req, res) {
  //   res.render("dashboard");
  // });
  // app.get("/homepage", function (req, res) {
  //   res.render("homepage");
  // });
  // comment out by jia and added below code for root route:






   // ============================
// ============USER PAGES=================
//    // ============================
<<<<<<< HEAD
   app.get("/register", function (req, res) {
    db.User.findAll({}).then(function (dbUsers) {
      res.render("user_form", {
        msg: "Create a User Profile",
        users: dbUsers
      });
    });
  });
=======
  //  app.get("/register", function (req, res) {
  //   db.User.findAll({}).then(function (dbUsers) {
  //     // console.log(res.body);
  //     res.render("user_form", {
  //       msg: "Create a User Profile",
  //       users: dbUsers
  //     });
  //   });
  // });

  // app.get("/users", function (req, res) {
  //   db.User.findAll({}).then(function (dbUsers) {
  //     res.render("allmembers", {
  //       msg: "Here are all our members",
  //       users: dbUsers
  //     });
  //   });
  // });


  // app.get("/dashboard", function (req, res) {
  //   db.User.findOne({ where: { id: req.params.id } }).then(function (dbUser) {
  //     res.render("kevinUserDetailedPage", {
  //       msg: "Users Card",
  //       user: dbUser
  //       // interests: dbUser.interests //comment out for testing
  //     });
  //   });
  // });
>>>>>>> 4d0ee654a463c2c2f9e4ebba10ec06102c374f26


<<<<<<< HEAD
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
=======
    // ============================
// ============TRIP PAGES=================
//    // ============================

  // ============================
  // ============TRIP PAGES=================
  //    // ============================

  app.get("/new_trip", function (req, res) {
    db.Trip.findAll({}).then(function (dbTrip) {
      res.render("trip_form", {
>>>>>>> 4d0ee654a463c2c2f9e4ebba10ec06102c374f26
        msg: "Here are our trips",
        trip: dbTrip
      });
    });

  });
<<<<<<< HEAD
  //12/06/18 change stops here

 

//using singletrip.handlebars for single trip(temp)
=======
  
//using past.handlebars for single trip(temp)
>>>>>>> 4d0ee654a463c2c2f9e4ebba10ec06102c374f26
  app.get("/trip/:id", function (req, res) {
    db.Trip.findOne({ where: { id: req.params.id } }).then(function (dbTrip) {
      res.render("past", {
        trip: dbTrip
      });
    });
  });
  
  // app.get("/users/trips/upcoming", function (req, res) {
  //   db.Trip.findAll({}).then(function (dbTrip) {
  //     res.render("upcomingtrip", {
  //       msg: "Here are our upcoming trips",
  //       trip: dbTrip
  //     });
  //   });
  // });
 
  // app.get("/users/trips/past", function (req, res) {
  //   db.User.findAll({}).then(function (dbUsers) {
  //     res.render("past", {
  //       msg: "Here are our past trips",
  //       trip: dbUsers
  //     });
  //   });
  // });
 
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
  // app.get("*", function (req, res) {
  //   res.render("404");
  // });




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
