import Header from './views/header.jsx'
import Home from './views/home.jsx'
import Test from './views/Test.jsx'
import React from 'react'

const NoMatch = () => <h1>404</h1>

import { fetchGists, fetchQuestions } from './actions/gists'

const exact = true

export default [
  {
    path: '/',
    exact,
    component: Home
  },
  {
    path: '/test/:amount?',
    exact,
    component: Test
  },
  {
    path:'*',
    component: NoMatch
  }
]
