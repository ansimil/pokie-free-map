import { useState, useEffect } from 'react'
import './Mapbox.css'
import Map, {NavigationControl} from 'react-map-gl'
import MarkerComp from '../Marker/MarkerComp'
import PopupComp from '../Popup/PopupComp'
import Loading from '../Loading/Loading'
import axios from 'axios'

const Mapbox = () => {
  const [popupDetails, setPopupDetails] = useState(null);
  const [pubs, setPubs] = useState()

  const secret = process.env.REACT_APP_MAPBOX_SECRET

  useEffect (() => {
    axios.get(`${process.env.REACT_APP_API_URL}/pubs`)
    .then(pubs => {
      setPubs(pubs.data)
    })
    .catch(err => console.log(err))
  }, [])

  if (!pubs) {
    return (
        <Loading />
    )
    
  }

  return (
    <Map
    initialViewState={{
      longitude: 151.209900,
      latitude: -33.865143,
      zoom: 10
    }}
    style={{width: '100vw', height: '91vh'}}
    mapStyle="mapbox://styles/mapbox/streets-v11"
    mapboxAccessToken={secret}
  >

  <NavigationControl position='bottom-right' />
  
  {pubs.map((pub) => {
    return (
    <MarkerComp
    key={pub._id}
    pub={pub}
    setPopupDetails={setPopupDetails}
    popupDetails={popupDetails}  
    />
    )
  })}
  
  {popupDetails && <PopupComp
    popupDetails={popupDetails}
    />}
  </Map>
  )
}

export default Mapbox