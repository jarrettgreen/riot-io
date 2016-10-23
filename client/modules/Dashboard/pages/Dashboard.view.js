import React, {Component} from 'react'
import { connect } from 'react-redux';
import callApi from '../../../util/apiCaller';


// Import Actions
import { fetchDashboard } from '../DashboardActions';

// Import Selectors
import { getDashboard } from '../DashboardReducer';

class DashboardView extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>{this.props.dashboard.title}</h1>
    )
  }
}
// Actions required to provide data for this component to render in sever side.
DashboardView.need = [params => {
  return fetchDashboard(params.id);
}];

function mapStateToProps(state, props) {
  return {
    dashboard: getDashboard(state, props.params.id),
  };
}

export default connect(mapStateToProps)(DashboardView);
