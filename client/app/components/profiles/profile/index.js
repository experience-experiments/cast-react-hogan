import React from 'react'

import { SummaryEditor } from '../../summary-editor'

export default class Profile extends React.Component {
  handleSaveSummary = (summary) => {
    const { onProfileChange, profile } = this.props

    onProfileChange({ ...profile, summary })
  }

  render () {
    const { profile } = this.props

    const { summary } = profile

    return (
      <SummaryEditor summary={summary} onSaveSummary={this.handleSaveSummary} />
    )

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

Profile.propTypes = {
  onProfileChange: React.PropTypes.func.isRequired,
  profile: React.PropTypes.object.isRequired
}

Profile.defaultProps = {
  onProfileChange: () => false,
  profile: {}
}
