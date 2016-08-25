import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import * as SkillActions from '../../../app/actions/skill'

class Skill extends React.Component {
  componentWillMount () {
    const { skill, dispatch, id } = this.props

    if (!skill) dispatch(SkillActions.getSkill(id))
  }

  render () {
    const { skill } = this.props

    console.log(skill)

    return (
      <div className='container' />
    )
  }
}

Skill.needs = [
  (id) => SkillActions.getSkill(id)
]

export default connect(
  (state) => ({
    skill: state.skill
  })
)(Skill)
