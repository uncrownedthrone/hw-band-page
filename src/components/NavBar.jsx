import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/dmb'>Dave Matthews Band</Link>
        </li>
        <li>
          <Link to='/anjunabeats'>Anjunabeats</Link>
        </li>
        <li>
          <Link to='/gramatik'>Gramatik</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
