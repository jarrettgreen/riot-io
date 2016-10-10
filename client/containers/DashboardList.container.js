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
    this.props.newDasboard = true
  }
  render() {
    return(
      <div>
        <h1>Dashbaords </h1>
        <AddDashboard display={this.props.newDashboard}/>
        <a onClick={this.toggleNewDashboard()}> new dashboard </a>
      </div>
    )
  }
}

export default DashboardList
