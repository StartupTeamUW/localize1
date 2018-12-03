var db = require('../models')
var bodyParser = require("body-parser")
module.exports = function (app) {
  
  // get users and trips
  app.get('/api/users', function (req, res) {
    // 1. Add a join to include all of each Trip's Posts
    db.User.findAll({ include: [ db.Trip ]}).then(function (dbUser) {
      res.json(dbUser)
    })
  })

  // get specific user
  app.get('/api/users/:id', function (req, res) {
    db.User.findOne({
      include: [db.Trip],
      // where: query
      where: {
        id: req.params.id
      }
    }).then(function (dbUser) {
      console.log(dbUser)
      res.json(dbUser)
    })
  })

  // Get route for retrieving user's future trips 
  app.get('/api/users/trips/upcoming', function (req, res) {

    db.Trip.findAll({
      include: [db.User],
      // where: query
      where: {
        end_date: {
          $gt: new Date()
        }
      }
    }).then(function (dbTrip) {
      console.log(dbTrip)
      res.json(dbTrip)
    })
  })

  // Get route for retrieving user's past trips 
  app.get('/api/users/trips/past', function (req, res) {

    db.Trip.findAll({
      include: [db.User],
      // where: query
      where: {
        end_date: {
           $lte: new Date()
        }
      }
    }).then(function (dbTrip) {
      console.log(dbTrip)
      res.json(dbTrip)
    })
    })
  
  // Get route for retrieving past trips for specific user
  app.get('/api/users/:range/past/:id', function (req, res) {

    db.Trip.findAll({
      include: [db.User],
      // where: query
      where: {
        Userid: req.params.id,
        end_date: {
           $lte: new Date()
        }
      }
    }).then(function (dbTrip) {
      console.log(dbTrip)
      res.json(dbTrip)
    })
    })
  

  //create new user
  app.post('/api/users', function (req, res) {
    db.User.create(req.body).then(function (dbUser) {
      res.json(dbUser)
    })
  })

  //delete user
  app.delete('/api/users/:id', function (req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbUser) {
      res.json(dbUser)
    })
  })

  //update user info
  app.put('/api/users', function(req, res) {
    db.User.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function (dbUser) {
        res.json(dbUser)
      })
  })
}