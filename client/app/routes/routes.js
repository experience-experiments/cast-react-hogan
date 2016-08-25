import React from 'react'
import { Route, IndexRoute } from 'react-router'

import IndexPath from './IndexPath'
import IndexPage from './IndexPage'

import ProfilesPage from './ProfilesPage'
import ProfilePage from './ProfilePage'

import PracticesPage from './PracticesPage'
import PracticePage from './PracticePage'

import SkillsPage from './SkillsPage'
import SkillPage from './SkillPage'

import UsersPage from './UsersPage'
import UserPage from './UserPage'

export default (
  <Route path='/react' component={IndexPath}>
    <IndexRoute component={IndexPage} />
    <Route path='profiles' component={ProfilesPage}>
      <Route path=':profile' component={ProfilePage} />
    </Route>
    <Route path='practices' component={PracticesPage}>
      <Route path=':practice' component={PracticePage} />
    </Route>
    <Route path='skills' component={SkillsPage}>
      <Route path=':skill' component={SkillPage} />
    </Route>
    <Route path='users' component={UsersPage}>
      <Route path=':user' component={UserPage} />
    </Route>
  </Route>
)
