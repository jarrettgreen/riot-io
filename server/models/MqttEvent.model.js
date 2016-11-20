import mongoose, { Schema } from 'mongoose'

const mqttEventSchema = new Schema({
  topic:  String,
  message: String,
  created: { type: Date, default: Date.now },
});

export default mongoose.model('mqttEvent', mqttEventSchema);
