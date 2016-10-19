import { ADD_DASHBOARD, ADD_DASHBOARDS} from './DashboardActions';

// Initial State
const initialState = { data: [] };


const DashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DASHBOARD :
      console.log(state.data)
      return {
        data: [action.dashboard, ...state.data]
      };
      console.log(state.data)
    case ADD_DASHBOARDS :
      return {
        data: action.dashboards
      };
    default:
      return state;
  }
};

// Get all dashboards
export const getDashboards = state => state.dashboards.data;

// Get dashboard from store by id
export const getDashboard = (state, id) => state.dashboards.data.filter(dashboard => dashboard._id === id)[0];

// Export Reducer
export default DashboardReducer;
