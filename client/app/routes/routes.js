import React from 'react'
import { Route, IndexRoute } from 'react-router'

import RoutePath from './RoutePath'
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
  <Route path='/react' component={RoutePath}>
    <IndexRoute component={IndexPage} />
    <Route path='practices' component={RoutePath}>
      <IndexRoute component={PracticesPage} />
      <Route path=':practice' component={PracticePage} />
    </Route>
    <Route path='profiles' component={RoutePath}>
      <IndexRoute component={ProfilesPage} />
      <Route path=':profile' component={ProfilePage} />
    </Route>
    <Route path='skills' component={RoutePath}>
      <IndexRoute component={SkillsPage} />
      <Route path=':skill' component={SkillPage} />
    </Route>
    <Route path='users' component={RoutePath}>
      <IndexRoute component={UsersPage} />
      <Route path=':user' component={UserPage} />
    </Route>
  </Route>
)
