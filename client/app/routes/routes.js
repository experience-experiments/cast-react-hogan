import React from 'react'
import { Route, IndexRoute } from 'react-router'

import IndexPage from './IndexPage'

import ProfilesPage from './ProfilesPage'
import ProfilePage from './ProfilesPage/ProfilePage'

import PracticesPage from './PracticesPage'
import PracticePage from './PracticesPage/PracticePage'

import SkillsPage from './SkillsPage'
import SkillPage from './SkillsPage/SkillPage'

import UsersPage from './UsersPage'
import UserPage from './UsersPage/UserPage'

export default (
  <Route path='/react'>
    <IndexRoute component={IndexPage} />
    <Route path='practices'>
      <IndexRoute component={PracticesPage} />
      <Route path=':practice' component={PracticePage} />
    </Route>
    <Route path='profiles'>
      <IndexRoute component={ProfilesPage} />
      <Route path=':profile' component={ProfilePage} />
    </Route>
    <Route path='skills'>
      <IndexRoute component={SkillsPage} />
      <Route path=':skill' component={SkillPage} />
    </Route>
    <Route path='users'>
      <IndexRoute component={UsersPage} />
      <Route path=':user' component={UserPage} />
    </Route>
  </Route>
)
