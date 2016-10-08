import React, {Component} from 'react'

class DashboardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      availabledDahsboards:[],
      currentDashboard: ''
    };
  }

  render() {
    return(
      <div>
      <h1>Dashbaords </h1>
      <div className="mqtt-log-container">
        {/* <MqttLog logEvents={this.state.logEvents} /> */}
      </div>
      </div>
    )
  }
}

export default DashboardList
