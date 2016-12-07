import { INIT_WIDGET } from './WidgetActions'

const initialState = {data: []}

const WidgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_WIDGET:
      return (dispatch) => {
        console.log('hello!')
      }
    default:
      return state
  }
}

export default WidgetReducer
