var express = require('express');
var app     = express();
var port    = process.env.PORT||3000;
var path    = require('path');
var http    = require('http');
var bodyParser = require('body-parser');
var mongoose= require('mongoose');
var morgan  = require('morgan');
var router=express.Router();
var appRoutes = require('./app/routes/api')(router);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname+'src'))
app.use('/api', appRoutes);

//connecting to the database
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds139370.mlab.com:39370/exam-professor', function (err) {
  if (err) {
    console.log('connection failed');
  } else {
    console.log('connected successfully');
  }
});

//Adding styles
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname+'src/app/index.html'));
})

//port listenning
app.listen(port,function () {
  console.log('App is runnning in the server');
});

/*
// Get our API routes
const api = require('./server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/!**
 * Get port from environment and store in Express.
 *!/
const port = process.env.PORT || '3000';
app.set('port', port);

/!**
 * Create HTTP server.
 *!/
const server = http.createServer(app);

/!**
 * Listen on provided port, on all network interfaces.
 *!/
server.listen(port, function () {
  console.log("API running")
});
*/
