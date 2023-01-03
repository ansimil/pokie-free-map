import './About.css'

const About = () => {
  return (
    <div className="aboutContainer">
        <h1><span>POKIE</span><span className='freeText'>FREE</span><span className='pubsText'>PUBS</span></h1>
        <div className='aboutInnerDiv'>
          <div className='aboutInnerDivLeft'>
            <h2 className="questionsText">Want to enjoy your ice cold Froth Whitlam without the annoying bleeps and bloops coming from the "VIP" section of your local?
            <br/>
            <br/>
            Want to find a place for a quiet drink without the temptation of gambling your hard earned money away?
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
        <p>Having trouble stepping away? Get help below</p>
    </div>
  )
}

export default About