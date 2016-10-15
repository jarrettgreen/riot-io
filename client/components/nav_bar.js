import React, {Component} from 'react'
import {Link, IndexLink} from 'react-router'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }
  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <FlatButton
          icon={<NavigationMenu />}
          onTouchTap={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem><IndexLink to ="/dashboards" activeClassName="active"> Dashboards </IndexLink></MenuItem>
          <MenuItem><IndexLink to ="/mqtt_logs" activeClassName="active"> MQTT Logs </IndexLink></MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default NavBar
