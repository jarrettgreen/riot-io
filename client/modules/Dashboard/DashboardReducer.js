import { ADD_DASHBOARD, ADD_DASHBOARDS} from './DashboardActions';

// Initial State
const initialState = { data: [] };


const DashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DASHBOARD :
      return {
        data: [action.dashboard, ...state.data],
      };
    case ADD_DASHBOARDS :
      return {
        data: action.dashboards,
      };
    default:
      return state;
  }
};

// Get all dashboards
export const getDashboards = state => state.dashboards.data;

// Export Reducer
export default DashboardReducer;
