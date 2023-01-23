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
            We want to show you the places in Australia where you can go without having to put up with the soul-less environment created by the country's many poker machines.
            </p>
          </div>
        </div>
        <p>Having trouble stepping away? Get help <a style={{color: "lightblue"}} href="https://www.gamblinghelponline.org.au/">here</a></p>
    </div>
  )
}

export default About