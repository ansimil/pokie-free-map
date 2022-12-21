import {useState} from 'react'
import './Mapbox.css'
import Map, {NavigationControl} from 'react-map-gl'
import MarkerComp from '../Marker/MarkerComp'
import PopupComp from '../Popup/PopupComp'
import pubs from '../pubs/pubs.json'


const Mapbox = () => {
  const [popupDetails, setPopupDetails] = useState(null);
  const secret = process.env.REACT_APP_MAPBOX_SECRET
  
  return (
    <div className="mapContainer">
    <Map
    initialViewState={{
      longitude: 151.209900,
      latitude: -33.865143,
      zoom: 10
    }}
    style={{width: '100vw', height: '90vh'}}
    mapStyle="mapbox://styles/mapbox/streets-v11"
    mapboxAccessToken={secret}
  >

  <NavigationControl position='bottom-right' />
  
  {pubs.map((pub) => {
    return (
    <MarkerComp 
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
  </div>
  )
}

export default Mapbox