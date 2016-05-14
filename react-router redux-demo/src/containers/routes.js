import React from 'react'
import { Route } from 'react-router'
import App from './App'
import MainSection from '../components/MainSection'

export default (
  <Route path="/" component={App}>
    <Route path=":tab"
           component={MainSection} />
  </Route>
)
