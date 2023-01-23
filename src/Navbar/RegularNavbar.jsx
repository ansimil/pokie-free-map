import { Link } from 'react-router-dom'
import './Navbar.css'


const RegularNavbar = ({ location, setHamburgerOpen }) => {
    const homeNav = location.pathname === '/' ? "active" : "inactive"
    const aboutNav = location.pathname === '/about' ? "active" : "inactive"
    const contactNav = location.pathname === '/contact' ? "active" : "inactive"
  
    return (
      <>
        <nav className='navbarInner'>
          <ul className='navbarList'>
            <li className={homeNav}>{<Link to={"."}><h5>Map</h5></Link>}</li>
            <li className={aboutNav}>{<Link to={"about"}><h5>About</h5></Link>}</li>
            <li className={contactNav}>{<Link to={"contact"}><h5>Contact</h5></Link>}</li>
          </ul>
          </nav>
      </>
    )
  }

export default RegularNavbar