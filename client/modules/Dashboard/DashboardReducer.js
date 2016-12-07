import { ADD_DASHBOARD, ADD_DASHBOARDS, REMOVE_DASHBOARD } from './DashboardActions'

// Initial State
const initialState = { data: [] }

const DashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DASHBOARD :
      return {
        data: [action.dashboard, ...state.data]
      }

    case ADD_DASHBOARDS :
      return {
        data: action.dashboards
      }

    case REMOVE_DASHBOARD :
      return {
        data: state.data.filter(dashboard => dashboard._id !== action.id)
      }

    default:
      return state
  }
}

// Get all dashboards
export const getDashboards = state => state.dashboards.data

// Get dashboard from store by id
export const getDashboard = (state, id) => state.dashboards.data.filter(dashboard => dashboard._id === id)[0]

// Export Reducer
export default DashboardReducer
