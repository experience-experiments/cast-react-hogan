import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import * as SkillsActions from '../../../app/actions/skills'

class Skills extends React.Component {
  componentWillMount () {
    const { skills, dispatch } = this.props

    if (!skills.length) dispatch(SkillsActions.getSkills())
  }

  render () {
    const { skills } = this.props

    if (!skills.length) return (<p>No results.</p>)
    return (
      <dl>
        <dt>skills</dt>
        <dd>
          <ul>
            {skills.map((skill) => {
              const { _id: id, name } = skill
              return (
                <li key={id}><Link to={`/react/skills/${id}`}>{name}</Link></li>
              )
            })}
          </ul>
        </dd>
      </dl>
    )
  }
}

Skills.needs = [
  SkillsActions.getSkills
]

export default connect(
  (state) => ({
    skills: state.skills
  })
)(Skills)
