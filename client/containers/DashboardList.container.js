import React, {Component} from 'react'
import { connect } from 'react-redux';

import { addDashboard, fetchDashboards } from '../modules/Dashboard/DashboardActions';
import { getDashboards } from '../modules/Dashboard/DashboardReducer';

import NewDashboard from '../components/dashboards/NewDashboard'
import DashboardListItem from '../components/dashboards/DashboardListItem'
import callApi from '../util/apiCaller';


class DashboardList extends Component {
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
  render() {
    return(
      <div>
        <h1 className="page-title">Dashboards</h1>

        <div className="row">
          <NewDashboard showModal={this.state.newDashboardDialogOpen}/>
          {this.props.dashboards.map(dashboard => (
              <DashboardListItem
                dashboard={dashboard}
                key={dashboard._id}
              />
            ))}
        </div>
      </div>
    )
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    addDashboard: addDashboard(state),
    dashboards: getDashboards(state)
  };
}

export default connect(mapStateToProps)(DashboardList);
