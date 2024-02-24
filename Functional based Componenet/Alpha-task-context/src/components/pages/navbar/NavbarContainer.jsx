import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

const NavbarContainer = () => {
  return (
    <section id="navbar">
    <div className='nav'>
        <Logo/>
        <Menu/>
    </div>
    </section>
  )
}

export default NavbarContainer