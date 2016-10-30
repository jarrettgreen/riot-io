import React, {Component} from 'react'
import { connect } from 'react-redux';

import { fetchDashboards, deleteDashboard } from '../DashboardActions';
import { getDashboards } from '../DashboardReducer';

import NewDashboard from '../components/NewDashboard'
import DashboardList from '../components/DashboardList'
import DashboardListItem from '../components/DashboardListItem'


class DashboardIndex extends Component {
  componentDidMount() {
    this.props.dispatch(fetchDashboards());
  }
  constructor(props) {
    super(props);
    this.state = {
      newDashboardDialogOpen: false,
    };
  }
  toggleNewDashboardDialog = () =>{
    this.setState({newDashboardDialogOpen: !this.state.newDashboardDialogOpen})
  }

  handleDeleteDashboard = dashboard => {
    if (confirm('Do you want to delete this dashboard')) { // eslint-disable-line
      this.props.dispatch(deleteDashboard(dashboard));
    }
  };
  render() {
    return(
      <div>
        <h1 className="page-title">Dashboards</h1>
        <div className="row">
          <NewDashboard showModal={this.state.newDashboardDialogOpen} />
          <DashboardList handleDeleteDashboard={this.handleDeleteDashboard} dashboards={this.props.dashboards} />
        </div>
      </div>
    )
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    dashboards: getDashboards(state)
  };
}

export default connect(mapStateToProps)(DashboardIndex);
