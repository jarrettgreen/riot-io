import React, {Component} from 'react'
import AddDashboard from '../components/dashboards/AddDashboard'
class DashboardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      availabledDahsboards:[],
      newDashboard: false,
      currentDashboard: ''
    };
    this.toggleNewDashboard = this.toggleNewDashboard.bind(this);
  }

  toggleNewDashboard(tf) {
    this.setState({newDashboard: true})
  }
  render() {
    return(
      <div>
        <h1>Dashbaords </h1>
        <AddDashboard display={this.newDashboard()}/>
        <a onClick={toggleNewDashboard(true)}> new dashboard </a>
      </div>
    )
  }
}

export default DashboardList
