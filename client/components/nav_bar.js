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
          onClick={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem
            containerElement={<IndexLink to="/"/>}
            primaryText="Dashboards"
            onClick={this.handleClose}/>
          <MenuItem
            containerElement={<Link to="/mqtt_logs"/>}
            primaryText="MQTT Logs"
            onClick={this.handleClose}/>
        </Drawer>
      </div>
    );
  }
}

export default NavBar
