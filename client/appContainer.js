import React from 'react'
import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

// Import Routes
import routes from './routes'

export default function AppContainer (props) {
  return (
    <Provider store={props.store}>
      <Router history={hashHistory}>
        {routes}
      </Router>
    </Provider>
  )
}
