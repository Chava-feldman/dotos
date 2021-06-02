const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();



// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())


app.use(function (req, res, next) {
   res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.header("Access-Control-Allow-Methods","GET,POST,DELETE,PUT")
   next();
});


// Configuring the database
const dbConfig = require('./config/development.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
   useNewUrlParser: true
}).then(() => {
   console.log("Successfully connected to the express-mongo-app database");
}).catch(err => {
   console.log('Could not connect to the database. Exiting now...', err);
   process.exit();
});


// define a simple route
app.get('/', (req, res) => {
   res.json({"message": "Welcome to ExpressMongoApp application. Created by IT Jugadu"});
});

// Require Books routes
require('./app/routes/book.routes.js')(app);
// Require Users routes
require('./app/routes/user.routes.js')(app);
// Require Todos routes
require('./app/routes/todo.routes.js')(app);

// listen for requests
app.listen(3000, () => {
   console.log("Server is listening on port 3000");
});
