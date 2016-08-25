import React from 'react'
import { connect } from 'react-redux'

import * as ProfileActions from '../../../app/actions/profile'

class Profile extends React.Component {
  componentWillMount () {
    const { profile, dispatch, id } = this.props

    if (!profile) dispatch(ProfileActions.getProfile(id))
  }

  render () {
    const { profile } = this.props

    console.log(profile)

    return (
      <div className='container' />
    )
  }
}

Profile.needs = [
  (id) => ProfileActions.getProfile(id)
]

export default connect(
  (state) => ({
    profile: state.profile
  })
)(Profile)
