import React from 'react'

export default ({ practice } ) => {
  const {
    name,
    owner,
    lineManagers,
    jobTitles
  } = practice

  return (
    <dl>
      <dt>name</dt>
      <dd>{name}</dd>
      <dt>owner</dt>
      <dd>{owner}</dd>
      {(() => {
        if (lineManagers.length) return (<dt>lineManagers</dt>)
      })()}
      {(() => {
        if (lineManagers.length) {
          return (
            <dd>
              <ul>
                {lineManagers.map((lineManager, i) => (<li key={i}>{lineManager}</li>))}
              </ul>
            </dd>
          )
        }
      })()}
      {(() => {
        if (jobTitles.length) return (<dt>jobTitles</dt>)
      })()}
      {(() => {
        if (jobTitles.length) {
          return (
            <dd>
              <ul>
                {jobTitles.map((jobTitle, i) => (<li key={i}>{jobTitle}</li>))}
              </ul>
            </dd>
          )
        }
      })()}
    </dl>
  )
}
