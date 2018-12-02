var db = require('../models')

module.exports = function (app) {
  app.get('/api/users', function (req, res) {
    // 1. Add a join to include all of each Trip's Posts
    db.User.findAll({ include: [ db.Trip ]}).then(function (dbUser) {
      res.json(dbUser)
    })
  })

  app.get('/api/users/:id', function (req, res) {
    // 2; Add a join to include all of the User's Trip here
    db.User.findOne({ include: [ db.Trip ] }).then(function (dbUser) {
      res.json(dbUser)
    })
  })

  app.post('/api/users', function (req, res) {
    db.User.create(req.body).then(function (dbUser) {
      res.json(dbUser)
    })
  })

  app.delete('/api/users/:id', function (req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbUser) {
      res.json(dbUser)
    })
  })

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
