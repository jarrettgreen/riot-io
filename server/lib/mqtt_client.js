import mqtt from 'mqtt'
import mqttEvent from '../models/mqtt_event'

class MQTTClient {
  constructor() {
    this.host = process.env.MQTT_HOST
    this.options = {
      keepalive: 10,
      protocolId: 'MQTT',
      protocolVersion: 4,
      clean: true,
      reconnectPeriod: 1000,
      connectTimeout: 30 * 1000,
      will: {
        topic: 'WillMsg',
        payload: 'Connection Closed abnormally..!',
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

    this.client.subscribe('#', { qos: 0 })

    this.client.on('message', function (topic, message, pakcet) {
      let mqttE = new mqttEvent( { topic, message } )
      mqttE.save(function (err) {
        if (err) {
          console.log(`Error: ${err}`);
        } else {
          console.log('[MQTT] Event Saved');
        }
      });
      console.log(`[MQTT] ${topic}: ${message.toString()}`)
    })
  }
}

export default MQTTClient
