import React, {Component} from 'react'
import { connect } from 'react-redux';


import { fetchDashboard } from '../DashboardActions';
import { getDashboard } from '../DashboardReducer';

import WidgetList from '../components/Widgets/WidgetList'


class DashboardView extends Component {
  componentDidMount() {
    this.props.dispatch(fetchDashboard(this.props.params.id));
  }

  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.dashboard){
      return(

        <div>
          <h1 className="page-title">{this.props.dashboard.title}</h1>
          <div className="row">
            <WidgetList widgets={this.props.dashboard.dashboardWidgets} />
          </div>
        </div>
      )
    } else { return <div>loading...</div>}
  }
}

function mapStateToProps(state, props) {
  return {
    dashboard: getDashboard(state, props.params.id),
  };
}

export default connect(mapStateToProps)(DashboardView);
