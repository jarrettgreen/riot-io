require('dotenv').config();
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

// Setup Mongoose
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/riot', { promiseLibrary: require('bluebird') });

const app = express();
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

var router = express.Router();              // get an instance of the express Router

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
