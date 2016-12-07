import callApi from '../../util/apiCaller'

export const ADD_DASHBOARD = 'ADD_DASHBOARD'
export const ADD_DASHBOARDS = 'ADD_DASHBOARDS'
export const REMOVE_DASHBOARD = 'REMOVE_DASHBOARD'

export function createDashboard (dashboard) {
  return (dispatch) => {
    return callApi('dashboards', 'post', {
      dashboard: {
        title: dashboard.title
      }
    }).then(res => dispatch(addDashboard(res.dashboard)))
  }
}

export function addDashboards (dashboards) {
  return {
    type: ADD_DASHBOARDS,
    dashboards
  }
}

export function addDashboard (dashboard) {
  return {
    type: ADD_DASHBOARD,
    dashboard
  }
}

export function deleteDashboard (id) {
  return (dispatch) => {
    return callApi(`dashboards/${id}`, 'delete').then(() => dispatch(removeDashboard(id)))
  }
}

export function removeDashboard (id) {
  return {
    type: REMOVE_DASHBOARD,
    id
  }
}

export function fetchDashboards () {
  return (dispatch) => {
    return callApi('dashboards').then(res => {
      dispatch(addDashboards(res))  //  NOT dispatch(addDashboards(res.dashboards));
    })
  }
}

export function fetchDashboard (id) {
  return (dispatch) => {
    return callApi(`dashboards/${id}`).then(res => dispatch(addDashboard(res.dashboard)))
  }
}
