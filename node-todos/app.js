var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var mongoose = require("mongoose");


var config = require("./config");
var setupController = require("./api/controllers/setupController");
var todoController = require("./api/controllers/todoController");

var app = express();
var port = process.env.PORT || 3000;

app.use("/assets", express.static("./public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(morgan("dev"));

// using ejs engine
app.set("view engine", "ejs");

// db info
//console.log(config.getDbConnectionString());
mongoose.connect(config.getDbConnectionString());
setupController(app);
todoController(app);

app.get("/", (req,res) =>{
    res.render("index");
});

app.listen(port, ()=>{
    console.log(`app listen on port ${port} `);
});