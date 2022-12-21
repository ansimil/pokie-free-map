import { Marker } from 'react-map-gl'


const MarkerComp = ({setPopupDetails, popupDetails, pub}) => {
  return (
    <Marker 
    anchor='center' 
    longitude={pub.longitude} 
    latitude={pub.latitude}
    onClick={(e) => {
      e.originalEvent.stopPropagation()
      if (popupDetails) {
        setPopupDetails(null)
      }
      else {
        setPopupDetails(pub)
      }
    }}
    />
  )
}

export default MarkerComp