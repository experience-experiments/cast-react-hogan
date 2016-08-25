import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import * as PracticesActions from '../../../app/actions/practices'

class Practices extends React.Component {
  componentWillMount () {
    const { practices, dispatch } = this.props

    if (!practices.length) dispatch(PracticesActions.getPractices())
  }

  render () {
    const { practices } = this.props

    if (!practices.length) return (<p>No results.</p>)
    return (
      <dl>
        <dt>practices</dt>
        <dd>
          <ul>
            {practices.map((practice, i) => {
              const { _id: id, name } = practice
              return (
                <li key={i}><Link to={`/react/practices/${id}`}>{name}</Link></li>
              )
            })}
          </ul>
        </dd>
      </dl>
    )
  }
}

Practices.needs = [
  PracticesActions.getPractices
]

export default connect(
  (state) => ({
    practices: state.practices
  })
)(Practices)
