/* eslint-disable global-require */
import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router'
import App from './modules/App/app';

import MqttLogViewer from './containers/mqtt_log_viewer'
import DashboardIndex from './modules/Dashboard/pages/Dashboard.index.js'
import DashboardShow from './modules/Dashboard/pages/Dashboard.show.js'
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
      <IndexRoute component={DashboardIndex}/>
      <Route path="/dashboards/:slug-:id" component={DashboardShow}/>
      <Route path="mqtt_logs" component={MqttLogViewer}/>
    </Route>
  </Router>
);
