import React from 'react'

export default ({ skill }) => {
  const {
    name,
    categories
  } = skill

  return (
    <dl>
      <dt>name</dt>
      <dd>{name}</dd>
      {(() => {
        if (categories.length) return (<dt>categories</dt>)
      })()}
      {(categories.map((category) => {
          const {
            name,
            skills
          } = category

          return (
            <dd>
                <dl>
                  <dt>name</dt>
                  <dd>{name}</dd>
                  {(() => {
                    if (skills.length) return (<dt>skills</dt>)
                  })()}
                  {(() => {
                    if (skills.length) {
                      return (
                        <dd>
                          <ul>
                            {skills.map((skill, i) => (<li key={i}>{skill}</li>))}
                          </ul>
                        </dd>
                      )
                    }
                  })()}
                </dl>
            </dd>
          )
      }))}
    </dl>
  )
}
