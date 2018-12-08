// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
// Requiring our models
var db = require('../models')


//CAN We call below from other files?
var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'localize_db'
});

connection.connect(function(error) {
    if (!!error) {
        console.log("Error");
    } else {
        console.log("connected")
    }
});
//CAN We call above from other files?

function arrayContains(needle, arrhaystack)
{
    return (arrhaystack.indexOf(needle) > -1);
}

// Routes
// =============================================================
module.exports = function(app) {

    // GET route for getting all of the trips
    app.get('/api/trips', function(req, res) {
        var query = {}
        if (req.query.user_id) {
            query.UserId = req.query.user_id
        }
        // 1. Add a join here to include all of the Users to these trips
        db.Trip.findAll({
            where: query,
            include: [db.User]
        }).then(function(dbTrip) {
            res.json(dbTrip)
        })
    })

    // Get route for retrieving a single Trip
    app.get('/api/trips/:id', function(req, res) {

        db.Trip.findOne({
            include: [db.User],
            // where: query
            where: {
                id: req.params.id
            }
        }).then(function(dbTrip) {
            console.log(dbTrip)
            res.json(dbTrip)
        })
    })

    //12/06/18 CHI what below code sending what the user just entered in /plantrip page upon clikcing the confirm button on our webpage. 
    //this logic goes with app.get "/trips" route in html-routes.js. that code will receive things we pass on from /api/trips

    app.post('/api/trips', function(req, res) {
        const url = require('url');
        db.Trip.create(req.body).then(function(dbTrip) {
            console.log("hereeee", req.body.destination);


            //CHI 12/7/18 Finding All of Interests with "ON" and grabbing the key name and putting them into an array
            var userInput = req.body
            var keyArray = []
            var match = [];
            var allMatches = [];

            for (var key in userInput) {
                var value = userInput[key];
                if (value == "on") {
                    keyArray.push(key)
                }
            };

            console.log(keyArray)

            //CHI 12/7/18 SELECTING all the useres with guide status of 1 (true) and user chosen travel location
            connection.query("SELECT * FROM Users WHERE guide_status = '1' AND ?",
                {
                    hometown: req.body.destination
                },

                //CHi 12/7/18 Putting all of the interests that are saved in the database into an interestArray
                function(error, rows, fields) {
                    if (error) {
                        console.log("CANT PASS THRU");
                    } else {
                        for (var i = 0; i < rows.length; i++) {
                            var interestlength = rows[i].interests
                            var interestParsed = JSON.parse(JSON.stringify(interestlength))
                            var interestArray = interestParsed.split(',')
                            // Interest from database = interestArray)
                            // Interest from user = keyArray)
                            var matching = 0;
                            // trying to find the users that have the highest match with the new user(input)
                            for (var n = 0; n < keyArray.length; n++) {
                              var value = keyArray[n];
                              var contains = arrayContains(value, interestArray)
                           
                              if (contains == true) {
                                matching++;                                
                              };
                          
                               
                                //     //Then unshift user’s name. This way the names and the matches are at index [0 & 1]
                                  
                                  


                            };
                            //sorting all the match(es) by number of matches
                            if (matching != 0){
                            match.push(matching)
                            match.unshift(rows[i].email);
                            match.unshift(rows[i].user_name);
                            match.unshift(rows[i].id);
                            allMatches.push(match);

                              match = [];
                              };

                      
                        }
                  
                        //sorting out in the order of highest to lowest number of matches
                        var newAllMatches = allMatches.sort(function(a, b){return b[3] - a[3]});
                        console.log("따22222222", newAllMatches);

                    }
    

            res.redirect(url.format({
                pathname: "/trips",
                query: dbTrip.dataValues
            }));
        });

    });

    //12/06/18 change stops here





    // DELETE route for deleting trips
    app.delete('/api/trips/:id', function(req, res) {
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
            }).then(function(dbTrip) {
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
})
};