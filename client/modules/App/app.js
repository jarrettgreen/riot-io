import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NavBar from '../../components/nav_bar.js'


require("!style!css!less!../../stylesheets/application.less");

class App extends Component {
  constructor(props) {
    super(props);
  }

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
