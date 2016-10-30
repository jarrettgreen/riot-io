var express = require('express')
  , router = express.Router()

router.use('/v1', require('./mqtt_event.routes'))
router.use('/v1', require('./Dashboard.routes'))
router.use('/v1', require('./DashboardWidget.routes'))

module.exports = router;
