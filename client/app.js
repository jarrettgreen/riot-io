import React, { Component } from 'react';
import ReactDOM from 'react-dom';

require("!style!css!less!./stylesheets/application.less");

class App extends Component {
  render() {
    return (
      <h1>
        Riot!
      </h1>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
