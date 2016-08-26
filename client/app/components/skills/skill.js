import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import * as SkillActions from '../../../app/actions/skill'

class Skill extends React.Component {
  hasSkill = () => {
    const { skill, id } = this.props
    return (skill._id === id)
  }

  componentWillMount () {
    if (!this.hasSkill()) {
      const { dispatch, id } = this.props

      dispatch(SkillActions.getSkill(id))
    }
  }

  render () {
    if (!this.hasSkill()) return (<p>No results.</p>)

    const { skill } = this.props
    const {
      name,
      categories
    } = skill

    return (
      <dl>
        <dt>name</dt>
        <dd>{name}</dd>
        {(() => {
          if (categories.length) return (<dt>categories</dt>)
        })()}
        {(categories.map((category) => {
            const {
              name,
              skills
            } = category

            return (
              <dd>
                  <dl>
                    <dt>name</dt>
                    <dd>{name}</dd>
                    {(() => {
                      if (skills.length) return (<dt>skills</dt>)
                    })()}
                    {(() => {
                      if (skills.length) {
                        return (
                          <dd>
                            <ul>
                              {skills.map((skill, i) => (<li key={i}>{skill}</li>))}
                            </ul>
                          </dd>
                        )
                      }
                    })()}
                  </dl>
              </dd>
            )

        }))}
      </dl>
    )
  }
}

Skill.needs = [
  ({ id }) => SkillActions.getSkill(id)
]

export default connect(
  (state) => ({
    skill: state.skill
  })
)(Skill)
