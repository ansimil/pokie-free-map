import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = ({location}) => {
  const homeNav = location.pathname === '/' ? "active" : "inactive"
  const aboutNav = location.pathname === '/about' ? "active" : "inactive"
  const contactNav = location.pathname === '/contact' ? "active" : "inactive"

  return (
    <div className="navbarContainer">
      <div className="title">
      {<Link to={'.'}><h2><span>POKIE</span><span className='freeText'>FREE</span><span className='pubsText'>PUBS</span></h2></Link>}
      </div>
      <nav className='navbarInner'>
        <ul className='navbarList'>
          <li className={homeNav}>{<Link to={"."}><h5>Map</h5></Link>}</li>
          <li className={aboutNav}>{<Link to={"about"}><h5>About</h5></Link>}</li>
          <li className={contactNav}>{<Link to={"contact"}><h5>Contact</h5></Link>}</li>
        </ul>
        </nav>
    </div>
  )
}

export default Navbar