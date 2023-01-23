import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


const MobileNavbar = ({ location, setHamburgerOpen }) => {
    const homeNav = location?.pathname === '/' ? "active" : "inactive"
    const aboutNav = location?.pathname === '/about' ? "active" : "inactive"
    const contactNav = location?.pathname === '/contact' ? "active" : "inactive"   
  return (
    <>
        <nav className='mobileNavbarInner'>
            <ul className='navbarList'>
            <li className={homeNav}>{<Link onClick={()=>{setHamburgerOpen(false)}} to={"."}><h5>Map</h5></Link>}</li>
            <li className={aboutNav}>{<Link onClick={()=>{setHamburgerOpen(false)}} to={"about"}><h5>About</h5></Link>}</li>
            <li className={contactNav}>{<Link onClick={()=>{setHamburgerOpen(false)}} to={"contact"}><h5>Contact</h5></Link>}</li>
            </ul>
        </nav>
    </>  
    )
}

export default MobileNavbar