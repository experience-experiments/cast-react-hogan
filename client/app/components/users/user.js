import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import * as UserActions from '../../../app/actions/user'

class User extends React.Component {
  hasUser = () => {
    const { user, id } = this.props
    return (user._id === id)
  }

  componentWillMount () {
    if (!this.hasUser()) {
      const { dispatch, id } = this.props

      dispatch(UserActions.getUser(id))
    }
  }

  render () {
    if (!this.hasUser()) return (<p>None.</p>)

    const { user } = this.props
    const {
      email,
      authorities,
      enabled
    } = user

    return (
      <dl>
        <dt>email</dt>
        <dd>{email}</dd>
        {(() => {
          if (authorities.length) return (<dt>authorities</dt>)
        })()}
        {(() => {
          if (authorities.length) {
            return (
              <dd>
                <ul>
                  {authorities.map((authority, i) => (<li key={i}>{authority}</li>))}
                </ul>
              </dd>
            )
          }
        })()}
        <dt>enabled</dt>
        <dd>{String(enabled)}</dd>
      </dl>
    )
  }
}

User.needs = [
  ({ id }) => UserActions.getUser(id)
]

export default connect(
  (state) => ({
    user: state.user
  })
)(User)
