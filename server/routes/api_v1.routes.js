var express = require('express')
  , router = express.Router()

router.use('/v1', require('./mqtt_event.routes'))
router.use('/v1', require('./Dashboard.routes'))

module.exports = router;
