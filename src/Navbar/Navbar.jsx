import './Navbar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import RegularNavbar from './RegularNavbar'
import MobileNavbar from './MobileNavbar'
import hamburgerIcon from '../assets/hamburger-icon.png'
import hamburgerHover from '../assets/hamburger-hover-icon.png'



const Navbar = ({ location }) => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const [hover, setHover] = useState(false)

  return (
    <div className="navbarContainer" >

      <div className="title">
        <Link to={'.'}><h2><span>POKIE</span><span className='freeText'>FREE</span><span className='pubsText'>PUBS</span></h2></Link>
      </div>

      <div className="mobileTitle">
        <Link onClick={()=>{setHamburgerOpen(false)}} to={'.'}><h2><span>P</span><span className='freeText'>F</span><span className='pubsText'>P</span></h2></Link>
      </div>

      <RegularNavbar location={location} setHamburgerOpen={setHamburgerOpen} />
      
      <div className='hamburgerIconContainer'>
        
        <img
        className={hamburgerOpen ? "hamburgerIcon rotate": "hamburgerIcon"}
        onClick={()=>{setHamburgerOpen(!hamburgerOpen)}}
        onMouseEnter={(e)=> {
        setHover(true)
        console.log(e)
        }} 
        onMouseLeave={(e)=> {
        setHover(false)
        console.log(e)
        }} 
        src={hover ? hamburgerHover : hamburgerIcon} 
        alt="menu" />
      </div>

      {hamburgerOpen && <MobileNavbar setHamburgerOpen={setHamburgerOpen}/>}
    </div>
  )

}

export default Navbar