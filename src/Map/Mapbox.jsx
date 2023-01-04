import { useState } from 'react'
import './Mapbox.css'
import Map, {NavigationControl} from 'react-map-gl'
import MarkerComp from '../Marker/MarkerComp'
import PopupComp from '../Popup/PopupComp'
import pubs from '../pubs/pubs.json'
import {v4 as uuid } from 'uuid'


const Mapbox = () => {
  const uniqueId = uuid()
  const [popupDetails, setPopupDetails] = useState(null);

  const secret = process.env.REACT_APP_MAPBOX_SECRET

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
    key={uniqueId}
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