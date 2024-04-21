import React from 'react'

//import styles
import '../components/Navbar.css'

//import Links for navigation
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
    <div className='navbar'>
        <h1>
          <Link to='/' className='nav-title'>
            DefineThis
          </Link>
        </h1>
        <ul className='navlinks'>
            <li>
              <Link to='/' className='navlink'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/about' className='navlink'>
                About
              </Link>
            </li>
            <li>
              <Link to='/contact' className='navlink'>
                Contact
              </Link>
            </li>
        </ul>
    </div>
    
    </>
  )
}

export default Navbar