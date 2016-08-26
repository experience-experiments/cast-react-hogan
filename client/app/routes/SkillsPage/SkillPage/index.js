import React from 'react'

import Skill from '../../../components/skills/skill'
import Navigation from '../../../components/navigation'

export default (props) => (
  <section>
    <header>
      <h1>Skill</h1>
    </header>
    <Skill id={props.params.skill} />
    <Navigation />
  </section>
)
