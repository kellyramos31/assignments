// import React from "react"
// import GoogleMapReact from "google-map-react"

// From latlong.net:
// Salt Lake City=  lat:  40.760780  lng: -111.891045
// NOTE:  website Snazzy Maps has alternatives styles for the Google Maps, if don't want the default

import React from 'react';
import "./SLCMap.css"
import GoogleMapReact from 'google-map-react';
import LocationMarker from "./LocationMarker"
import { PawsContextConsumer } from "./PawsContext"



// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// class SLCMap extends Component {
//   render() {

function SLCMap (){

const SLCMap = ({center, zoom}) => {

return(

<div>  
 <PawsContextConsumer>
    {
      ({ dogFriendlyRestaurants}) => {  
      const markers = dogFriendlyRestaurants.map(restaurant => 
          <LocationMarker
            key={restaurant.id} 
            lat={restaurant.coordinates.latitude} 
            lng={restaurant.coordinates.longitude}
          />
          
      )}}

      <div className = "map">   
        <GoogleMapReact
          bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}}
          defaultCenter={ center}
          defaultZoom={ zoom }
        >
            {markers}   //coming back as undefined here
        </GoogleMapReact>
      </div>
  </PawsContextConsumer>
   
  </div>
)}


            SLCMap.defaultProps = {
            center: {
            lat: 40.760780 ,
            lng: -111.891045
        },
          zoom: 11
        }

}
export default SLCMap




// function UglyThingsList() {

//     return (
//         <div>
//             <UglyThingsContextConsumer>
//                 {
//                     ({ uglyThingsList }) => {
//                         const myUglyList = uglyThingsList.map((item, index) =>
//                             <UglyThing
//                                 key={item._id}
//                                 index={index}
//                                 id={item._id}
//                                 item={item}
//                             />
//                         )
//                         return myUglyList
//                     }
//                 }

//             </UglyThingsContextConsumer>
//         </div>
//     )

// }

// export default UglyThingsList