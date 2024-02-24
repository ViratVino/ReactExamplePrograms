import React from 'react'
import { NavLink } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
        <ul>
            <li>
               <NavLink to="/">Home</NavLink>
            </li>
            <li>
            <NavLink to="/users">User</NavLink>
            </li>
        </ul>
    </div>
  )
}
