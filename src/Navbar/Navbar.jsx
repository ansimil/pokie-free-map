import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = ({location}) => {
  const homeNav = location.pathname === '/' ? "active" : "inactive"
  const aboutNav = location.pathname === '/about' ? "active" : "inactive"
  const contactNav = location.pathname === '/contact' ? "active" : "inactive"


  console.log(homeNav)
  return (
    <div className="navbarContainer">
      <div className="title">
      {<Link to={'.'}><h2><span>POKIE</span><span className='freeText'>FREE</span><span className='pubsText'>PUBS</span></h2></Link>}
      </div>
      <nav className='navbarInner'>
        <ul className='navbarList'>
          <li className={homeNav}>{<Link to={"."}><h3>Map</h3></Link>}</li>
          <li className={aboutNav}>{<Link to={"about"}><h3>About</h3></Link>}</li>
          <li className={contactNav}>{<Link to={"contact"}><h3>Contact</h3></Link>}</li>
        </ul>
        </nav>
    </div>
  )
}

export default Navbar