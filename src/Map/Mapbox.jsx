/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { useState } from 'react'
import './Mapbox.css'
import Map, { NavigationControl } from 'react-map-gl'
import MarkerComp from '../Marker/MarkerComp'
import PopupComp from '../Popup/PopupComp'
import Loading from '../Loading/Loading'

const Mapbox = ({pubs, isLoading, setHamburgerOpen }) => {
  const [popupDetails, setPopupDetails] = useState(null);
  const secret = process.env.REACT_APP_MAPBOX_SECRET

  if (isLoading) {
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
    onClick={(e) => {
      e.originalEvent.stopPropagation()
      setHamburgerOpen(false)
      if (popupDetails) {
        setPopupDetails(null)
      }
    }}
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