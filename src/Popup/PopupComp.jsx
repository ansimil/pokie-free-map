/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Popup } from 'react-map-gl'
import './PopupComp.css'

const PopupComp = ({popupDetails}) => {
  return (
    <Popup 
    longitude={popupDetails.longitude}
    latitude={popupDetails.latitude}
    anchor="bottom"
    offset={35}
    >
    <div className="popupInner">
    <h4>{popupDetails.name}</h4>
    <p>
    {popupDetails.street},
    <br />
    {popupDetails.city},
    <br />
    {popupDetails.state}, {popupDetails.postcode}
    </p>
    <p>Date last verified: {popupDetails.dateVerified}</p>
    <a href={popupDetails.websiteLink}>{popupDetails.websiteLink}</a>
    </div>
    
    </Popup>
    )
}

export default PopupComp