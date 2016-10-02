var express = require('express')
  , router = express.Router()

router.use('/mqtt_events', require('./mqtt_event.routes'))

module.exports = router;
