import mongoose, { Schema } from 'mongoose'

const dashboardSchema = new Schema({
  title:  String,
  created: { type: Date, default: Date.now },
});

const  Dashboard = mongoose.model('Dashboard', dashboardSchema);

export default Dashboard
