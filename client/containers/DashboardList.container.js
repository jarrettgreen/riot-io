import React, {Component} from 'react'
import AddDashboard from '../components/dashboards/AddDashboard'
import DashboardListItem from '../components/dashboards/DashboardListItem'
import callApi from '../util/apiCaller';


class DashboardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dashboards: [],
      newDashboard: false,
      currentDashboard: ''
    };
  }
  toggleNewDashboard = () =>{
    if (this.state.newDashboard == true) {
      this.setState({newDashboard: false})
    } else {
      this.setState({newDashboard: true})
    }
  }

  fetchDashboards = () => {
    callApi('dashboards')
      .then(res => {
        this.setState({dashboards: res});
      }
    );
  }
  componentWillMount() {
    this.fetchDashboards();
  }

  render() {
    return(
      <div>
        <h1>Dashboards</h1>
        <AddDashboard display={this.state.newDashboard}/>
        <a onClick={() => this.toggleNewDashboard()}> new dashboard </a>
          {this.state.dashboards.map(dashboard => (
              <DashboardListItem
                dashboard={dashboard}
                key={dashboard._id}
                //  onDelete={() => props.handleDeletePost(post.cuid)}
              />
            ))}

      </div>
    )
  }
}

export default DashboardList
