import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/nav_bar.js'
import MqttLogViewer from './containers/mqtt_log_viewer'

require("!style!css!less!./stylesheets/application.less");

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <MqttLogViewer/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
