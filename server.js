var express = require("express");

var PORT = process.env.PORT || 8080;

var app = expres();

// Serve static content
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Set handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Import routes and give the server access
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start the server
app.listen(PORT, function(){
    console.log("Server listening on http://localhost:" + PORT);
});
