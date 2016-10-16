import mongoose, { Schema } from 'mongoose'

const dashboardWidgetSchema = new Schema({
  title:  String,
  created: { type: Date, default: Date.now },
  widget: {
    type: Schema.ObjectId,
    ref: 'Dashboard'
  }
});

const  dashboardWidgetSchema = mongoose.model('dashboardWidget', dashboardWidgetSchema);

export default dashboardWidget
