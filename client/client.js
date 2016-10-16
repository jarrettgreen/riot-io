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

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <MuiThemeProvider>
    <AppContainer store={createStoreWithMiddleware(reducers)} />
  </MuiThemeProvider>
  , document.getElementById('root'));
