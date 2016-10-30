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

const  DashboardWidget = mongoose.model('dashboardWidget', dashboardWidgetSchema);
export default DashboardWidget
