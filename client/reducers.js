import { combineReducers } from 'redux'

import dashboards from './modules/Dashboard/DashboardReducer'
import widgets from './modules/Widget/WidgetReducer'

const rootReducer = combineReducers({
  dashboards,
  widgets
})

export default rootReducer
