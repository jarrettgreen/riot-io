import mongoose, { Schema } from 'mongoose'

const mqttEventSchema = new Schema({
  cuid: { type: 'String', required: true },
  topic:  String,
  message: String,
  created: { type: Date, default: Date.now },
});

const  mqttEvent = mongoose.model('mqttEvent', mqttEventSchema);

export default mqttEvent
