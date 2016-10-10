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
  componentDidMount() {
    callApi('dashboards')
      .then(res => {
        this.setState({dashboards: res});
      }
    );
  }

  render() {
    return(
      <div>
        <h1>Dashboards</h1>
        <AddDashboard display={this.state.newDashboard}/>
        <a onClick={() => this.toggleNewDashboard()}> new dashboard </a>
          {() => {
            this.props.dashboards.map(dashboard => (
              <DashboardListItem
                dashboard={dashboard}
                key={dashboard.id}
                //  onDelete={() => props.handleDeletePost(post.cuid)}
              />
            ))
          }}

      </div>
    )
  }
}

export default DashboardList
