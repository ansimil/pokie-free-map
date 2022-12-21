import { Popup } from 'react-map-gl'

const PopupComp = ({popupDetails}) => {
  return (
    <Popup 
    longitude={popupDetails.longitude}
    latitude={popupDetails.latitude}
    anchor="bottom"
    offset={35}
    >

    {popupDetails.name}

    </Popup>
    )
}

export default PopupComp