import mqtt from 'mqtt'
import mqttEvent from '../models/mqtt_event'

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

    this.client = mqtt.connect(this.host, this.options)

    this.client.on('connect', function () {
      console.log(`[MQTT] Connected to ${process.env.MQTT_HOST}`)
    });

    let emitMessage = (message) => {
      this.socket.emit('new mqtt event', message);
    }

    this.client.subscribe('#', { qos: 0 })

    this.client.on('message', function (topic, message, pakcet) {
      let mqttE = new mqttEvent( { topic, message } )

      mqttE.save(function (err) {
        if (err) {
          console.log(`Error: ${err}`);
        } else {
          console.log('[MQTT] Event Saved');
          emitMessage(message);
        }
      });
      console.log(`[MQTT] ${topic}: ${message.toString()}`)
    })
  }
}

export default MQTTClient
