var db = require('../models')

// Routes
// =============================================================
module.exports = function (app) {
    app.get('/api/trips', function (req, res) {
        var query = {}
        if (req.query.user_id) {
            query.UserId = req.query.user_id
        }
        // 1. Add a join here to include all of the Users to these trips
        db.Trip.findAll({
            where: query,
            include: [db.User]
            // where: query
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

    // POST route for saving a new Trip
    app.post('/api/trips', function (req, res) {
        db.Trip.create(req.body).then(function (dbTrip) {
            res.json(dbTrip)
        })
    })

    // DELETE route for deleting trips
    app.delete('/api/trips/:id', function (req, res) {
        db.Trip.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbTrip) {
            res.json(dbTrip)
        })
    })

    // PUT route for updating trips
    app.put('/api/trips', function (req, res) {
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
}