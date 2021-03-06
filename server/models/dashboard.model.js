import mongoose, { Schema } from 'mongoose'

const dashboardSchema = new Schema({
  title: { type: 'String', required: true },
  slug: { type: 'String', required: true },
  created: { type: Date, default: Date.now },
  // widgets: [widgetsSchema]
});

const  Dashboard = mongoose.model('Dashboard', dashboardSchema);

export default Dashboard
