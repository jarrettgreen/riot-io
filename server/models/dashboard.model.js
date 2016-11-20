import mongoose, { Schema } from 'mongoose'
import { dashboardWidgetSchema } from './dashboardWidget.model'

const dashboardSchema = new Schema({
  title: { type: 'String', required: true },
  slug: { type: 'String', required: true },
  created: { type: Date, default: Date.now },
  dashboardWidgets: [ dashboardWidgetSchema ]
});

export default mongoose.model('Dashboard', dashboardSchema)
