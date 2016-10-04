import React, {Component} from 'react'
import {Link, IndexLink} from 'react-router'

class NavBar extends Component {
  render() {
    return(
      <nav className="navbar navbar-default navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">RIOT</a>
          </div>
          <div className="collapse navbar-collapse" id="#main-nav">
          <ul className="nav navbar-nav">
            <li><IndexLink to ="/" activeClassName="active"> Dashboard </IndexLink></li>
            <li><IndexLink to ="/mqtt_logs" activeClassName="active"> MQTT Logs </IndexLink></li>
          </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar
