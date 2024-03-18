import React from 'react'
import { NavLink } from 'react-router-dom'

function Logo() {
  return (
    <NavLink to="./">
    <img src='/property-log.png' alt='propert'/>
    </NavLink>
  )
}

export default Logo