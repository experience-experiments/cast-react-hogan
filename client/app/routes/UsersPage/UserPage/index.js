import React from 'react'

import User from '../../../components/users/user'
import Navigation from '../../../components/navigation'

export default (props) => (
  <section>
    <header>
      <h1>User</h1>
    </header>
    <User id={props.params.user} />
    <Navigation />
  </section>
)
