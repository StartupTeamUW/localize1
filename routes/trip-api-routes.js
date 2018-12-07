// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
// Requiring our models
var db = require('../models')

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the trips
  app.get('/api/trips', function (req, res) {
    var query = {}
    if (req.query.user_id) {
      query.UserId = req.query.user_id
    }
    // 1. Add a join here to include all of the Users to these trips
    db.Trip.findAll({
      where: query,
      include: [db.User]
    }).then(function (dbTrip) {
      res.json(dbTrip)
    })
  })

  // Get route for retrieving a single Trip
  app.get('/api/trips/:id', function (req, res) {

    db.Trip.findOne({
      include: [db.User],
      // where: query
      where: {
        id: req.params.id
      }
    }).then(function (dbTrip) {
      console.log(dbTrip)
      res.json(dbTrip)
    })
  })

 


  //12/06/18 CHI what below code sending what the user just entered in /plantrip page upon clikcing the confirm button on our webpage. 
  //this logic goes with app.get "/trips" route in html-routes.js. that code will receive things we pass on from /api/trips

  app.post('/api/trips', function (req, res) {

    const url = require('url');    
db.Trip.create(req.body).then(function (dbTrip) {
  console.log("hereeee", req.body)
  res.redirect(url.format({
    pathname:"/trips",
    query: dbTrip.dataValues
  }));
});

  });

  //12/06/18 change stops here





  // DELETE route for deleting trips
  app.delete('/api/trips/:id', function (req, res) {
    db.Trip.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbTrip) {
      res.json(dbTrip)
    })
  })

  // PUT route for updating trips
  app.put('/api/trips', function(req, res) {
    db.Trip.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function (dbTrip) {
        res.json(dbTrip)
      })
  })


  // end of jia's commented outto test

  // previous version:
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
  // app.put('/api/trips', function (req, res) {
  //   db.Trip.update(
  //     req.body,
  //     {
  //       where: {
  //         id: req.body.id
  //       }
  //     }).then(function (dbTrip) {
  //       res.json(dbTrip)
  //     })
  // })
  // // Delete a trip by id
  // app.delete("/api/trips/:id", function (req, res) {
  //   db.Trip.destroy({ where: { id: req.params.id } }).then(function (dbTrip) {
  //     res.json(dbTrip);
  //   });
  // });
}
