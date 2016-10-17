import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {Route, Router, IndexRoute, hashHistory} from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppContainer from './appContainer';
import reducers from './reducers';
import routes from './routes';
import { configureStore } from './store';

// Initialize store
const store = configureStore(window.__INITIAL_STATE__);


ReactDOM.render(
  <MuiThemeProvider>
    <AppContainer store={store} />
  </MuiThemeProvider>
  , document.getElementById('root'));
