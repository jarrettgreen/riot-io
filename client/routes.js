/* eslint-disable global-require */
import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router'
import App from './modules/App/app';

import MqttLogViewer from './containers/mqtt_log_viewer'
import DashboardList from './containers/DashboardList.container'

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}


// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="mqtt_logs" component={MqttLogViewer}/>
      <Route path="/dashboards" component={DashboardList}/>

    </Route>
  </Router>
);
