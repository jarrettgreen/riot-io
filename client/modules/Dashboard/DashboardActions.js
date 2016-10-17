import callApi from '../../util/apiCaller';

export const ADD_DASHBOARD = 'ADD_DASHBOARD';
export const ADD_DASHBOARDS = 'ADD_DASHBOARDS';

export function addDashboard(dashboard) {
  return {
    type: ADD_DASHBOARD,
    dashboard
  };
}

export function addDashboardRequest(dashboard) {
  return (dispatch) => {
    return callApi('dashboards', 'dashboard', {
      dashboard: {
        title: dashboard.title
      },
    }).then(res => dispatch(addDashboard(res.dashboard)));
  };
}


export function addDashboards(dashboards) {
  return {
    type: ADD_DASHBOARDS,
    dashboards
  };
}

export function fetchDashboards() {
  return (dispatch) => {
    return callApi('dashboards').then(res => {
      dispatch(addDashboards(res));  //  NOT dispatch(addDashboards(res.dashboards));
    });
  };
}
