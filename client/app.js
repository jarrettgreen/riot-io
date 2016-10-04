import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router'
import NavBar from './components/nav_bar.js'
import MqttLogViewer from './containers/mqtt_log_viewer'
import Dashboards from './components/dashboards.js'

require("!style!css!less!./stylesheets/application.less");

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        {this.props.children}
      </div>
    )
  }
}

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="mqtt_logs" component={MqttLogViewer}/>
      <IndexRoute component={Dashboards}/>
    </Route>
  </Router>,

  document.querySelector('#app')
);
