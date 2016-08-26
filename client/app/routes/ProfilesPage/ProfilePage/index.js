import React from 'react'

import Profile from '../../../components/profiles/profile'
import Navigation from '../../../components/navigation'

export default (props) => (
  <section>
    <header>
      <h1>Profile</h1>
    </header>
    <Profile id={props.params.profile}/>
    <Navigation />
  </section>
)
