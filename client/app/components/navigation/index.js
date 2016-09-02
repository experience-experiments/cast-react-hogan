import React from 'react'
import { Link } from 'react-router'

export default () => (
  <nav>
    <ul>
      <li><Link to='/practices'>All Practices</Link></li>
      <li><Link to='/profiles'>All Profiles</Link></li>
      <li><Link to='/skills'>All Skills</Link></li>
      <li><Link to='/users'>All Users</Link></li>
    </ul>
  </nav>
)
