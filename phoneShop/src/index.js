import './main.css'
import React from 'react'
import ReactDOM from 'react-dom'
import {routerMiddleware, ConnectedRouter} from 'connected-react-router'


import {createBrowserHistory} from 'history'

import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {Provider} from 'react-redux'

import createRootReducer from 'reducers'
import routes from 'routes'

const browserHistory = createBrowserHistory()
const middlewares = [thunk, routerMiddleware(browserHistory)]
const store = createStore(
  createRootReducer(browserHistory),
  composeWithDevTools(applyMiddleware(...middlewares))
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={browserHistory}>
      {routes}
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)