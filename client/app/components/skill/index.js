import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import * as SkillActions from '../../../app/actions/skill'

class Skill extends React.Component {
  componentWillMount () {
    const { dispatch, id } = this.props

    dispatch(SkillActions.getSkill(id))
  }

  render () {
    const { skill } = this.props

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
