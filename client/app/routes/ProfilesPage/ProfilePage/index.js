import React from 'react'
import { connect } from 'react-redux'

import Profile from '../../../components/profiles/profile'
import Navigation from '../../../components/navigation'

import * as ProfileActions from '../../../../app/actions/profiles/profile'

class ProfilePage extends React.Component {
  hasProfile () {
    const { profile, params } = this.props

    return (profile._id === params.profile)
  }

  componentDidMount () {
    if (!this.hasProfile()) { // neg
      const { dispatch, params } = this.props

      dispatch(ProfileActions.getProfile(params.profile))
    }
  }

  handleProfileChange = (profile) => {
    if (this.hasProfile()) { // pos
      const { dispatch, params } = this.props

      dispatch(ProfileActions.patchProfile(params.profile, profile))
    }
  }

  getProfile () {
    if (!this.hasProfile()) {
      return (
        <p>No results.</p>
      )
    }

    const { profile } = this.props

    return (
      <Profile profile={profile} onProfileChange={this.handleProfileChange} />
    )
  }

  render () {
    return (
      <section>
        <header>
          <h1>Profile</h1>
        </header>
        {this.getProfile()}
        <Navigation />
      </section>
    )
  }
}

ProfilePage.needs = [
  ({ profile }) => ProfileActions.getProfile(profile)
]

export default connect(
  (state) => ({
    profile: state.profile
  })
)(ProfilePage)
