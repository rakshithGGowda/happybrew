import React from 'react'

function BottomNavMobile() {
  return (
    <nav className="nav">
    <a href="#" className="nav__link">
      <i className="material-icons nav__icon">dashboard</i>
      <span className="nav__text">THE VENUE</span>
    </a>
    <a href="#" className="nav__link nav__link--active">
      <i className="material-icons nav__icon">celebration</i>
      <span className="nav__text">EVENTS</span>
    </a>
    <a href="#" className="nav__link">
      <i className="material-icons nav__icon">restaurant_menu</i>
      <span className="nav__text">MENUS</span>
    </a>
    <a href="#" className="nav__link">
      <i className="material-icons nav__icon">collections_bookmark</i>
      <span className="nav__text">GALLERY</span>
    </a>
    <a href="#" className="nav__link">
      <i className="material-icons nav__icon">confirmation_number</i>
      <span className="nav__text">BOOK TABLE</span>
    </a>
  </nav>
  )
}

export default BottomNavMobile