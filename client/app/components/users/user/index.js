import React from 'react'

export default function User ({ user }) {
  const {
    email,
    authorities,
    enabled
  } = user

  return (
    <dl>
      <dt>email</dt>
      <dd>{email}</dd>
      {(() => {
        if (authorities.length) return (<dt>authorities</dt>)
      })()}
      {(() => {
        if (authorities.length) {
          return (
            <dd>
              <ul>
                {authorities.map((authority, i) => (<li key={i}>{authority}</li>))}
              </ul>
            </dd>
          )
        }
      })()}
      <dt>enabled</dt>
      <dd>{String(enabled)}</dd>
    </dl>
  )
}

User.propTypes = {
  user: React.PropTypes.object.isRequired
}
