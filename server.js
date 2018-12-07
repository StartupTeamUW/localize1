require("dotenv").config();
var express = require("express");
var passport   = require('passport')
var session    = require('express-session')
var bodyParser = require('body-parser')
var env = require('dotenv').load()
var exphbs = require("express-handlebars");


var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));


//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport 
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions



// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");


//Homepage
app.get("/", function (req, res) {
  res.render("homepage");
});


//Models
var models = require("./models");


//Routes
var authRoute = require('./routes/auth.js')(app,passport);

require("./archieve/html-routes")(app);
require("./routes/trip-api-routes")(app);
require("./routes/user-api-routes")(app);



//load passport strategies
require('./config/passport/passport.js')(passport, models.User);


//Sync Database

// If running a test, set syncOptions.force to true
var syncOptions = { force: false };


if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting cthe server, syncing our models ------------------------------------/
models.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
})

module.exports = app;
