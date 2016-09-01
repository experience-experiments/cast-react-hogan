import React from 'react'
import { connect } from 'react-redux'

import User from '../../../components/users/user'
import Navigation from '../../../components/navigation'

import * as UserActions from '../../../../app/actions/users/user'

class UserPage extends React.Component {
  hasUser () {
    const { user, params } = this.props

    return (user._id === params.user)
  }

  componentDidMount () {
    if (!this.hasUser()) {
      const { dispatch, params } = this.props

      dispatch(UserActions.getUser(params.user))
    }
  }

  getUser () {
    if (!this.hasUser()) {
      return (
        <p>No results.</p>
      )
    }

    const { user } = this.props

    return (
      <User user={user} />
    )
  }

  render () {
    return (
      <section>
        <header>
          <h1>User</h1>
        </header>
        {this.getUser()}
        <Navigation />
      </section>
    )
  }
}

UserPage.needs = [
  ({ user }) => UserActions.getUser(user)
]

export default connect(
  (state) => ({
    user: state.user
  })
)(UserPage)
