import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import * as UsersActions from '../../../app/actions/users'

class Users extends React.Component {
  componentWillMount () {
    const { users, dispatch } = this.props

    if (!users.length) dispatch(UsersActions.getUsers())
  }

  render () {
    const { users } = this.props

    if (!users.length) return (<p>No results.</p>)
    return (
      <dl>
        <dt>users</dt>
        <dd>
          <ul>
            {users.map((user, i) => {
              const { _id: id, name } = user
              return (
                <li key={i}><Link to={`/react/users/${id}`}>{name}</Link></li>
              )
            })}
          </ul>
        </dd>
      </dl>
    )
  }
}

Users.needs = [
  UsersActions.getUsers
]

export default connect(
  (state) => ({
    users: state.users
  })
)(Users)
