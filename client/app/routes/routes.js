import React from 'react'
import { Route, IndexRoute } from 'react-router'

import IndexPath from './IndexPath'
import IndexPage from './IndexPage'

export default (
  <Route path='/' component={IndexPath}>
    <IndexRoute component={IndexPage} />
    <Route path='/react' component={IndexPage} />
  </Route>
)
