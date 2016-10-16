import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onClick
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


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
