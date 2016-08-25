import React from 'react'
import { Link } from 'react-router'

export default () => (
  <nav>
    <ul>
      <li><Link to='/react/practices'>All Practices</Link></li>
      <li><Link to='/react/profiles'>All Profiles</Link></li>
      <li><Link to='/react/skills'>All Skills</Link></li>
      <li><Link to='/react/users'>All Users</Link></li>
    </ul>
  </nav>
)