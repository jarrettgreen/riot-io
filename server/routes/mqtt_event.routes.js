import { Router } from 'express';
import * as MqttEventController from '../controllers/mqtt_events.controller';
const router = new Router();

// Get all events
router.route('/mqtt_events').get(MqttEventController.getMqttEvents);

// Get all events for topic
router.route('/mqtt_events/:topic/').get(MqttEventController.getMqttEventsByTopic);

// // Add a new Post
// router.route('/mqtt_events').post(MqttEventController.addMqttEvent);
//
// // Delete a mqtt_event by cuid
// router.route('/mqtt_events/:cuid').delete(MqttEventController.deleteMqttEvent);

module.exports = router;
