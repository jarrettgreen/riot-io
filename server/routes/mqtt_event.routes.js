import { Router } from 'express';
import * as MqttEventController from '../controllers/mqtt_events.controller';
const router = new Router();

// Get all Posts
router.route('/mqtt_events').get(MqttEventController.getMqttEvents);

// // Get one mqtt_event by cuid
// router.route('/mqtt_events/:cuid').get(MqttEventController.getMqttEvent);
//
// // Add a new Post
// router.route('/mqtt_events').post(MqttEventController.addMqttEvent);
//
// // Delete a mqtt_event by cuid
// router.route('/mqtt_events/:cuid').delete(MqttEventController.deleteMqttEvent);

module.exports = router;
