import React from 'react'
import {  Link } from "react-router-dom"


const Header = () => {
  return (
    <div className='navbar'>
        <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/info">Info</Link>
            </li>
        </ul>
      
    </div>
  )
}

export default Header;
