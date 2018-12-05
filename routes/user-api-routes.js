var db = require('../models')
// var bodyParser = require("body-parser")

module.exports = function (app) {

  // get users and trips
  app.get('/api/users', function (req, res) {
    // 1. Add a join to include all of each Trip's Posts
    db.User.findAll({ include: [db.Trip] }).then(function (dbUser) {
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
  // app.post('/api/users', function (req, res) {
  //   db.User.create(req.body).then(function (dbUser) {
  //     res.json(dbUser)
  //   })
  // })

  app.post("/api/users", function (req, res) {
    console.log("REQ.BODY: ", req.body);
    db.User.create(req.body).then(function (dbUser) {
      console.log("somethinghere", dbUser);
      res.redirect("/user/" + dbUser.dataValues.id);
    });
  });
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
  app.put('/api/users/:id', function (req, res) {
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




  // ============================================
  //get all users
  // app.get("/api/users", function (req, res) {
  //   db.User.findAll({}).then(function (dbUsers) {
  //     res.json(dbUsers);
  //   });
  // });

  // //create new user
  // app.post('/api/users', function (req, res) {
  //   db.User.create(req.body).then(function (dbUser) {
  //     res.json(dbUser)
  //   })
  // })

  // //update user
  // app.put('/api/users', function (req, res) {
  //   db.User.update(
  //     req.body,
  //     {
  //       where: {
  //         id: req.body.id
  //       }
  //     }).then(function (dbUser) {
  //       res.json(dbUser)
  //     })
  // })

  //  // Delete a user by id
  //  app.delete("/api/users/:id", function (req, res) {
  //   db.User.destroy({ where: { id: req.params.id } }).then(function (dbUser) {
  //     res.json(dbUser);
  //   });
  // });

  //END OF KIM'S SECOND DRAFT-DECIDED TO KEEP JIA'S ROUTES AND INSTEAD ADJUST HTML ROUTES ACCORDINGLY TO RENDER DATA



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
  //   });var db = require('../models')
  // var bodyParser = require("body-parser")

  module.exports = function (app) {

    // get users and trips
    app.get('/api/users', function (req, res) {
      // 1. Add a join to include all of each Trip's Posts
      db.User.findAll({ include: [db.Trip] }).then(function (dbUser) {
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
    // app.post('/api/users', function (req, res) {
    //   db.User.create(req.body).then(function (dbUser) {
    //     res.json(dbUser)
    //   })
    // })

    app.post("/api/users", function (req, res) {
      console.log("REQ.BODY: ", req.body);
      db.User.create(req.body).then(function (dbUser) {
        console.log("somethinghere", dbUser);
        res.redirect("/user/" + dbUser.dataValues.id);
      });
    });
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
    app.put('/api/users/:id', function (req, res) {
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




    // ============================================
    //get all users
    // app.get("/api/users", function (req, res) {
    //   db.User.findAll({}).then(function (dbUsers) {
    //     res.json(dbUsers);
    //   });
    // });

    // //create new user
    // app.post('/api/users', function (req, res) {
    //   db.User.create(req.body).then(function (dbUser) {
    //     res.json(dbUser)
    //   })
    // })

    // //update user
    // app.put('/api/users', function (req, res) {
    //   db.User.update(
    //     req.body,
    //     {
    //       where: {
    //         id: req.body.id
    //       }
    //     }).then(function (dbUser) {
    //       res.json(dbUser)
    //     })
    // })

    //  // Delete a user by id
    //  app.delete("/api/users/:id", function (req, res) {
    //   db.User.destroy({ where: { id: req.params.id } }).then(function (dbUser) {
    //     res.json(dbUser);
    //   });
    // });

    //END OF KIM'S SECOND DRAFT-DECIDED TO KEEP JIA'S ROUTES AND INSTEAD ADJUST HTML ROUTES ACCORDINGLY TO RENDER DATA



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


  // });
}

