import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NavBar from '../../components/nav_bar.js'
import MqttLogViewer from '../../containers/mqtt_log_viewer'
import DashboardList from '../../containers/DashboardList.container'

require("!style!css!less!../../stylesheets/application.less");

class App extends Component {
  componentDidMount() {
    this.socket = io();
  }
  render() {
    return (
        <div>
          <NavBar/>
          {this.props.children}
        </div>
    )
  }
}
export default App
