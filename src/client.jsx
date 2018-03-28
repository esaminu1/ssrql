import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes.jsx'
import { Provider, cr } from 'react-redux'
import reducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {fetchQuestions} from './actions/gists'

const store = createStore(
  reducer,
  window.__store__,
  applyMiddleware(thunkMiddleware, createLogger())
)

render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
