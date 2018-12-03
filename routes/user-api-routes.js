var db = require('../models')
// var bodyParser = require("body-parser")

module.exports = function (app) {
  //get all users
  app.get("/api/users", function (req, res) {
    db.User.findAll({}).then(function (dbUsers) {
      res.json(dbUsers);
    });
  });

  //create new user
  app.post('/api/users', function (req, res) {
    db.User.create(req.body).then(function (dbUser) {
      res.json(dbUser)
    })
  })

  //update user
  app.put('/api/users', function (req, res) {
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

   // Delete a user by id
   app.delete("/api/users/:id", function (req, res) {
    db.User.destroy({ where: { id: req.params.id } }).then(function (dbUser) {
      res.json(dbUser);
    });
  });
  

 
 

  // previous version:
  // app.get("/api/users", function (req, res) {
  //   db.User.findAll({}).then(function (dbUsers) {
  //     res.json(dbUsers);
  //   });
  // });

  // // Create a new trip
  // app.post("/api/users", function (req, res) {
  //   db.User.create(req.body).then(function (dbUser) {
  //     res.redirect("/user/" + dbUser.dataValues.id);
  //   });
  // });

  // // Delete a trip by id
  // app.delete("/api/users/:id", function (req, res) {
  //   db.User.destroy({ where: { id: req.params.id } }).then(function (dbUser) {
  //     res.json(dbUser);
  //   });
  // });
}

