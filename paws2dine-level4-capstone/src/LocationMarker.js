import React from "react"
import {Icon} from "@iconify/react"
import locationIcon from "@iconify/icons-mdi/dog-side"


//maybe mapping of coords needs to happen here???


const LocationMarker = ({lat, lng, onClick})=> {
    return(
        <div className="location-marker" onClick={onClick}>
            <Icon 
            icon={locationIcon} 
            className="location-icon"
            />

        </div>
    )
}

export default LocationMarker