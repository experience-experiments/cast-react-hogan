import React from 'react'
import { Route, IndexRoute } from 'react-router'

import IndexPath from './IndexPath'
import IndexPage from './IndexPage'
import ProfilesPage from './ProfilesPage'
import ProfilePage from './ProfilePage'

export default (
  <Route path='/react' component={IndexPath}>
    <IndexRoute component={IndexPage} />
    <Route path='profiles' component={ProfilesPage}>
      <Route path=':profile' component={ProfilePage} />
    </Route>
  </Route>
)
