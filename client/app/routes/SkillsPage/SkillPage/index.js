import React from 'react'
import { connect } from 'react-redux'

import Skill from '../../../components/skills/skill'
import Navigation from '../../../components/navigation'

import * as SkillActions from '../../../../app/actions/skills/skill'

class SkillPage extends React.Component {
  hasSkill () {
    const { skill, params } = this.props

    return (skill._id === params.skill)
  }

  componentDidMount () {
    if (!this.hasSkill()) {
      const { dispatch, params } = this.props

      dispatch(SkillActions.getSkill(params.skill))
    }
  }

  getSkill () {
    if (!this.hasSkill()) {
      return (
        <p>No results.</p>
      )
    }

    const { skill } = this.props

    return (
      <Skill skill={skill} />
    )
  }

  render () {
    return (
      <section>
        <header>
          <h1>Skill</h1>
        </header>
        {this.getSkill()}
        <Navigation />
      </section>
    )
  }
}

SkillPage.needs = [
  ({ skill }) => SkillActions.getSkill(skill)
]

export default connect(
  (state) => ({
    skill: state.skill
  })
)(SkillPage)
