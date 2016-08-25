import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import * as ProfilesActions from '../../../app/actions/profiles'

class Profiles extends React.Component {
  componentWillMount () {
    const { profiles, dispatch } = this.props

    if (!profiles.length) dispatch(ProfilesActions.getProfiles())
  }

  render () {
    const { profiles } = this.props

    if (!profiles.length) return (<p>No results.</p>)
    return (
      <dl>
        <dt>profiles</dt>
        <dd>
          <ul>
            {profiles.map((profile, i) => {
              const { _id: id, name } = profile
              return (
                <li key={i}><Link to={`/react/profiles/${id}`}>{name}</Link></li>
              )
            })}
          </ul>
        </dd>
      </dl>
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
