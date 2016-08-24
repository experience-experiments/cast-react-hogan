import React from 'react'
import { connect } from 'react-redux'

import * as ProfileActions from '../../../app/actions/profile'

export default class Profile extends React.Component {
  render () {
    return (
      <div className='container' />
    )
  }
}

Profile.needs = [
  ProfileActions.getProfile
]

export default connect(
  (state) => ({
    profile: state.profile
  })
)(Profile)
