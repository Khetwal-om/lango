import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './Header.css'
import Lango from '../../img/Lango.png'
class Navbar extends Component {
  render() {
    return (
      <div className="background__navbar">
        <nav className="navbar container">
          <NavLink  to="/" className="logo"><img src={Lango} alt=""/></NavLink>
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