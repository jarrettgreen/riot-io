require('dotenv').config();
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import MQTTClient from './lib/mqtt_client';

// Setup Mongoose
// Set native promises as mongoose promise
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_DB_HOST, (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
    throw error;
  }
});

var port = process.env.PORT || 8080;
var server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use('/api', require('./routes/mqtt_event.routes'));
server.use(express.static('public'));


server.listen(port);


console.log('\n\n\n');
console.log('        ██████╗ ██╗ ██████╗ ████████╗');
console.log('        ██╔══██╗██║██╔═══██╗╚══██╔══╝');
console.log('        ██████╔╝██║██║   ██║   ██║   ');
console.log('        ██╔══██╗██║██║   ██║   ██║   ');
console.log('        ██║  ██║██║╚██████╔╝   ██║   ');
console.log('        ╚═╝  ╚═╝╚═╝ ╚═════╝    ╚═╝   ');
console.log('        -----------------------------');
console.log(`        FULL ON RIOT AT PORT ${port}!!!!`);
console.log('\n\n\n');



var mqttClient = new MQTTClient();

console.log(server._router.stack)
