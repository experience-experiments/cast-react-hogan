import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import * as UserActions from '../../../app/actions/user'

class User extends React.Component {
  componentWillMount () {
    const { user, dispatch, id } = this.props

    if (!user) dispatch(UserActions.getUser(id))
  }

  render () {
    const { user } = this.props

    console.log(user)

    return (
      <div className='container' />
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
