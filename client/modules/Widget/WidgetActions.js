// import callApi from '../../util/apiCaller'

export const INIT_WIDGET = 'INIT_WIDGET'

export function initWidget (widgetType) {
  return {
    type: INIT_WIDGET,
    widgetType
  }
}
