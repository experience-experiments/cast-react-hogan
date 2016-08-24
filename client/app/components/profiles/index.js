import React from 'react'
import { connect } from 'react-redux'

import * as ProfilesActions from '../../../app/actions/profiles'

export default class Profiles extends React.Component {
  render () {
    console.log(this.props)
    return (
      <div className='container' />
    )
  }
}

Profiles.needs = [
  ProfilesActions.getProfiles
]

export default connect(
  (state) => ({
    profiles: state.profiles
  })
)(Profiles)
