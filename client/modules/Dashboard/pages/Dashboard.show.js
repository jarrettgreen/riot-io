import React, {Component} from 'react'
import { connect } from 'react-redux';

import { fetchDashboard } from '../DashboardActions';
import { getDashboard } from '../DashboardReducer';

import WidgetList from '../components/Widgets/WidgetList'


class DashboardView extends Component {
  componentDidMount() {
    this.props.dispatch(fetchDashboard());
  }

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1 className="page-title">{this.props.dashboard.title}</h1>
        <div className="row">
          <WidgetList widgets={this.props.dashboard.dashboardWidgets} />
        </div>
      </div>
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
