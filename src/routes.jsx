import React from 'react'
import { Route, Switch } from 'react-router'
import Header from './views/header.jsx'

import routes from './isoRoutes'

export default () => {
  return [
    <Header key="header" />,
    <Switch key="body">{routes.map(route => <Route key={route.path || '404'} {...route} />)}</Switch>
  ]
}
