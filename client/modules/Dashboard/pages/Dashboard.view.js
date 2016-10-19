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
  componentDidMount() {
    this.props.dispatch(fetchDashboard(this.props.params.id));
  }
  render() {
    return (
      <h1>{this.props.dashboard.title}</h1>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    dashboard: getDashboard(state, props.params.id),
  };
}

export default connect(mapStateToProps)(DashboardView);
