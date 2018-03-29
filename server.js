import http from 'http'
import express from 'express'
import { StaticRouter, matchPath } from 'react-router'
import { renderToString } from 'react-dom/server'
import 'isomorphic-fetch'
import React from 'react'
import path from 'path'
import hotMiddleware from './middleware/wpDev'
import Routes from './src/routes.jsx'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './src/reducers'
import thunkMiddleware from 'redux-thunk'
import isoRoutes from './src/isoRoutes'

const app = express()

 app.set('view engine', 'pug')
app.set('views', path.join(__dirname, "templates"))

const server = http.createServer(app)

if (process.env.NODE_ENV === 'development') app.use(hotMiddleware)

const renderApp = (status, store, location, res) =>
  res.status(status).render('index', {
    root: renderToString(
      <Provider store={store}>
        <StaticRouter context={{}} location={location}>
          <Routes />
        </StaticRouter>
      </Provider>
    ),
    store: store.getState()
  })

app.get('*', (req, res) => {
  const store = createStore(reducer, applyMiddleware(thunkMiddleware))
  let fetchData
  const routeExists = isoRoutes.some(route => {
    const match = matchPath(req.path, route)
    if (match && route.path !== '*') fetchData = route.component.fetchData(store, match)
    return match
  })
  if (routeExists) {
    if (fetchData) {
      return fetchData.then(() => {
        renderApp(200, store, req.url, res)
      }) //.catch(render err page)
    }
    return renderApp(200, store, req.url, res)
  }
  return renderApp(404, store, req.url, res)
})

server.listen(3001)
