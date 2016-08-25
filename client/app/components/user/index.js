import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import * as UserActions from '../../../app/actions/user'

class User extends React.Component {
  componentWillMount () {
    const { dispatch, id } = this.props

    dispatch(UserActions.getUser(id))
  }

  render () {
    const { user } = this.props

    if (!user) return (<p>None.</p>)
    return (
      <dl>
        <dt>email</dt>
        <dd>{user.email}</dd>
        { /* (() => {
          if (user.authorities.length) {
            return (
              <dt>authorities</dt>
              <dd>
                <ul>
                  {user.authorities.map((authority) => (
                    <li>{authority}</li>
                  ))}
                </ul>
              </dd>
            )
          }
        })() */ }
        <dt>enabled</dt>
        <dd>{user.enabled}</dd>
      </dl>
    )
  }
}

User.needs = [
  (id) => UserActions.getUser(id)
]

export default connect(
  (state) => ({
    user: state.user
  })
)(User)
