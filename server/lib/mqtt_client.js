import mqtt from 'mqtt'
import MqttEvent from '../models/MqttEvent.model'
import PrettyConsoleLogger from './prettyConsoleLogger'
import cuid from 'cuid';

class MQTTClient {
  constructor(io) {
    this.host = process.env.MQTT_HOST
    this.socket = io;
    this.options = {
      keepalive: 10,
      protocolId: 'MQTT',
      protocolVersion: 4,
      clean: true,
      reconnectPeriod: 1000,
      connectTimeout: 30 * 1000,
      will: {
        topic: 'WillMsg',
        payload: "Riot lost it's connection!",
        qos: 0,
        retain: false
      },
      username: process.env.MQTT_USER,
      password: process.env.MQTT_PASS,
      rejectUnauthorized: false
    }

    let logger = new PrettyConsoleLogger('MQTT', 'cyan')

    let emitMessage = (message) => {
      this.socket.emit('new mqtt event', JSON.stringify(message));
    }

    this.client = mqtt.connect(this.host, this.options)

    this.client.on('connect', function () {
      logger.log(`Connected to ${process.env.MQTT_HOST}`)
    });

    this.client.subscribe('#', { qos: 0 })

    this.client.on('message', function (topic, message, packet) {
      const newMqttEvent = new MqttEvent( { topic, message } )
      newMqttEvent.cuid = cuid();

      newMqttEvent.save(function (err) {
        if (err) {
          logger.log(`Error: ${err}`);
        } else {
          logger.log(`${topic}/ ${message.toString()}`)
          emitMessage(newMqttEvent);
        }
      });
    })

    this.socket.on('connection', (socket) => {
      socket.on('publish to mqtt', (message) => {
        if (message.value === undefined) {
          logger.log('Bad MQTT Event')
        } else {
          this.client.publish(message.topic, message.value)
        }
      });
    })

  }
}

export default MQTTClient
