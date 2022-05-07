import React from 'react'
import logo from '../logo.svg'

function Header() {
  return (
    <header className="App-header">
    <div className='header-container'>
        <a href=''>
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <nav className="navigation">
            <a href='' >The Venue</a>
            <a href='' >Menus</a>
            <a href='' >Gallery</a>
            <a href='' >Events</a>
        </nav>
        <div className='nav-book-table'>
        <a href=''>Book Table</a>
        </div>
    </div>
  </header>
  )
}

export default Header