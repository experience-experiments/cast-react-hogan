import React from 'react'

import Practice from '../../components/practice'
import Navigation from '../../components/navigation'

export default (props) => (
  <section>
    <header>
      <h1>Practice</h1>
    </header>
    <Practice id={props.params.practice}/>
    <Navigation />
  </section>
)
