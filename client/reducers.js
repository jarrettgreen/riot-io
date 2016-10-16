import { combineReducers } from 'redux';

import dashboards from './modules/Dashboard/DashboardReducer';

const rootReducer = combineReducers({
  dashboards
});

export default rootReducer;
