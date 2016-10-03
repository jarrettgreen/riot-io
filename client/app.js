import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router'
import NavBar from './components/nav_bar.js'
import MqttLogViewer from './containers/mqtt_log_viewer'
import Home from './components/home.js'

require("!style!css!less!./stylesheets/application.less");

class App extends Component {
  componentDidMount() {
    this.socket = io();
  }
  render() {
    return (
      <div>
        <NavBar/>
        {/* <MqttLogViewer/> */}
        {this.props.children}
      </div>
    )
  }
}

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="mqtt_logs" component={MqttLogViewer}/>
      <IndexRoute component={Home}/>
    </Route>
  </Router>,

  document.querySelector('#app')
);
