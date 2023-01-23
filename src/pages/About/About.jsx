import './About.css'

const About = ({setHamburgerOpen}) => {
  return (
    <div 
    className="aboutContainer"
    onClick={()=>{
      setHamburgerOpen(false)
    }}
    >
        <h1><span>POKIE</span><span className='freeText'>FREE</span><span className='pubsText'>PUBS</span></h1>
        <div className='aboutInnerDiv'>
          <div className='aboutInnerDivLeft'>
            <h2 className="questionsText">Want to find a place for a quiet drink without the temptation of gambling your hard earned money away?
            <br/>
            <br/>
            Want to enjoy your ice cold Froth Whitlam without the annoying bleeps and bloops coming from the "VIP" section of your local?
            <br/>
            <br/>
            </h2>
          </div>
          <div className='aboutInnerDivRight'>
            <h3>Our goal:</h3>
            <p>
            Australians have a gambling problem and we want to show people the pubs and clubs they can go to without the need for a slap on the pokies. <br/><br/>We want to highlights the establishments in Australia that don't rely its patrons losing their hard earned money hard to survive. <br/> <br/>Publicans see pokies as intrinsic to the survival of their pubs - we need to support our pokie-less pubs and show that it's possible to survive without them. 
            </p>
          </div>
        </div>
        <p>Having trouble stepping away? Get help <a style={{color: "lightblue"}} href="https://www.gamblinghelponline.org.au/">here</a></p>
    </div>
  )
}

export default About