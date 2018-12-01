require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");

var db = require("./models");

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

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
<<<<<<< HEAD
// CRUD user data
require("./routes/user-api-routes.js")(app);

// CRUD trip data
require("./routes/trip-api-routes.js")(app);
=======
require("./routes/tripApiRoutes")(app);
require("./routes/user-api-routes")(app);
>>>>>>> 0cdd18f737e77cfe2496dc78eea6bff6ce16fba5

var syncOptions = { force: true };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  pasword: "",
  database: "localize"
})

module.exports = app;
