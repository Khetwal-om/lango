import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './Header.css'
class Navbar extends Component {
  render() {
    return (
      <div className="background__navbar">
        <nav className="navbar container">
          <NavLink  to="/" className="logo"><img src="https://firebasestorage.googleapis.com/v0/b/eat-me-608ee.appspot.com/o/storytelling.svg?alt=media&token=299bb6c0-c652-406a-bc50-26054c2d31cf" alt=""/></NavLink>
          <ul className="navbar-menu">
            <li className="">
              <NavLink to="/shayna" className="">
                Explore
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/emma" className="">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
export default Navbar