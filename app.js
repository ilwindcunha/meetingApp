var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");


var port = 8080;

var db = "mongodb://localhost/meetingApp";
 var routes = require('./route/index.js');
mongoose.connect(db);
//check if database is connected successfully
// var dbcheck = mongoose.connection;
// dbcheck.on('error', console.error.bind(console, 'connection error:'));
// dbcheck.once('open', function() {
//   // we're connected!
// });

//Set up View Engine
var swig = require("swig");
app.engine('html', swig.renderFile);
//tells express where to look for swig files
app.set('views', path.join(__dirname,'views'));
//define view Engine
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname,'public')));

//always define middleware before routes
//get data as json
app.use(bodyParser.json());
//set urlencoded to true
app.use(bodyParser.urlencoded({
    extended: true
}));
//routes always below middleware
app.use('/', routes);
app.listen(port, function(){
    //print to console that server has started
    console.log("app listening on port " + port);
});
