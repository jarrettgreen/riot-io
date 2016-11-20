import mongoose, { Schema } from 'mongoose'

export const dashboardWidgetSchema = new Schema({
  title:  String,
  topic: String,
  type: String,
  position: Number,
  width: String,
  properties: {
    onValue: String,
    offValue: String,
  }
});

export default mongoose.model('DashboardWidget', dashboardWidgetSchema);
