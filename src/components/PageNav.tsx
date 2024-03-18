import React from 'react'
import {NavLink} from "react-router-dom"
import Logo from './Logo'

function PageNav() {
  return (
    <nav>
        <Logo/>
     <ul>
        <li>
            <NavLink to='/login'>Login</NavLink>
        </li>
        <li>
            <NavLink to='./about' >About</NavLink>
        </li>
        <li>
            <NavLink to='./product' >Products</NavLink>
        </li>
     </ul>

    </nav>
  )
}

export default PageNav