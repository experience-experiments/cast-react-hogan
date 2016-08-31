import React from 'react'
import { connect } from 'react-redux'

import * as ProfileActions from '../../../../app/actions/profiles/profile'

import { ProfileEditor } from '../../profile-editor'

class Profile extends React.Component {
  hasProfile = () => {
    const { profile, id } = this.props

    return (profile._id === id)
  }

  componentWillMount () {
    if (!this.hasProfile()) {
      const { dispatch, id } = this.props

      dispatch(ProfileActions.getProfile(id))
    }
  }

  handleSaveProfile = () => { // profile) {
    if (this.hasProfile()) {
      const { dispatch, id, profile } = this.props

      dispatch(ProfileActions.patchProfile(id, profile))
    }
  }

  render () {
    if (!this.hasProfile()) return (<p>No results.</p>)

    const { profile } = this.props

    return (<ProfileEditor profile={profile} onSaveProfile={this.handleSaveProfile} />)

    /*
    const { profile } = this.props
    const {
      emailAddress,
      name,
      practiceName,
      metaData
    } = profile

    return (
      <dl>
        <dt>emailAddress</dt>
        <dd>{emailAddress}</dd>
        <dt>name</dt>
        <dd>{name}</dd>
        <dt>practiceName</dt>
        <dd>{practiceName}</dd>
        {(() => {
          if (metaData) return (<dt>metaData</dt>)
        })()}
        {(() => {
          if (metaData) {
            const {
              active,
              creationDate,
              lastUpdateDate,
              lastUpdatedBy,
              ready
            } = metaData

            return (
              <dd>
                <dl>
                  <dt>active</dt>
                  <dd>{String(active)}</dd>
                  <dt>creationDate</dt>
                  <dd>{creationDate}</dd>
                  <dt>lastUpdateDate</dt>
                  <dd>{lastUpdateDate}</dd>
                  <dt>lastUpdatedBy</dt>
                  <dd>{lastUpdatedBy}</dd>
                  <dt>ready</dt>
                  <dd>{String(ready)}</dd>
                </dl>
              </dd>
            )
          }
        })()}
      </dl>
    )
    */
  }
}

Profile.needs = [
  ({ id }) => ProfileActions.getProfile(id)
]

export default connect(
  (state) => ({
    profile: state.profile
  })
)(Profile)
