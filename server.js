require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");

var models = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");


// var env = require('dotenv').load()

//For BodyParser
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport 
var passport = require('passport');
var session = require('express-session');

app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


//Homepage
app.get("/", function (req, res) {
  res.render("homepage");
});


//load passport file
require('./routes/auth.js')(app, passport);


// var authRoute = require('./routes/auth.js')(app, passport);



//load passport strategies
require('./auth/config/passport.js')(passport, models.User);


// require("./routes/trip-api-routes")(app);
require("./routes/user-api-routes")(app);
require("./routes/html-routes")(app);


// If running a test, set syncOptions.force to true
var syncOptions = { force: false };


if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting cthe server, syncing our models ------------------------------------/
models.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
})

module.exports = app;
