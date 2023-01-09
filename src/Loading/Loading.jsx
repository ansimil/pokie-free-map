import React from 'react'
import ball from "../assets/loading-ring.gif"
import "./Loading.css"

const Loading = () => {
  return (
    <div className='loadingContainer'>

    <img src={ball} alt="hello" width="200px" height="200px"/>

    </div>
  )
}

export default Loading