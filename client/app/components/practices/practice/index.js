import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import * as PracticeActions from '../../../../app/actions/practices/practice'

class Practice extends React.Component {
  hasPractice = () => {
    const { practice, id } = this.props
    return (practice._id === id)
  }

  componentWillMount () {
    if (!this.hasPractice()) {
      const { practice, dispatch, id } = this.props

      dispatch(PracticeActions.getPractice(id))
    }
  }

  render () {
    if (!this.hasPractice()) return (<p>No results.</p>)

    const { practice } = this.props
    const {
      name,
      owner,
      lineManagers,
      jobTitles
    } = practice

    return (
        <dl>
          <dt>name</dt>
          <dd>{name}</dd>
          <dt>owner</dt>
          <dd>{owner}</dd>
          {(() => {
            if (lineManagers.length) return (<dt>lineManagers</dt>)
          })()}
          {(() => {
            if (lineManagers.length) {
              return (
                <dd>
                  <ul>
                    {lineManagers.map((lineManager, i) => (<li key={i}>{lineManager}</li>))}
                  </ul>
                </dd>
              )
            }
          })()}
          {(() => {
            if (jobTitles.length) return (<dt>jobTitles</dt>)
          })()}
          {(() => {
            if (jobTitles.length) {
              return (
                <dd>
                  <ul>
                    {jobTitles.map((jobTitle, i) => (<li key={i}>{jobTitle}</li>))}
                  </ul>
                </dd>
              )
            }
          })()}
        </dl>
    )
  }
}

Practice.needs = [
  ({ id }) => PracticeActions.getPractice(id)
]

export default connect(
  (state) => ({
    practice: state.practice
  })
)(Practice)
