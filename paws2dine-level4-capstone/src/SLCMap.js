// import React from "react"
// import GoogleMapReact from "google-map-react"
// From latlong.net:
// Salt Lake City=  lat:  40.760780  lng: -111.891045
// NOTE:  website Snazzy Maps has alternatives styles for the Google Maps, if don't want the default

import React, { useContext} from "react"
import {useState} from "react"
import "./SLCMap.css"
import GoogleMapReact from 'google-map-react';
import LocationMarker from "./LocationMarker"
import LocationInfoBox from "./LocationInfoBox"
import { PawsContext} from "./PawsContext"


export default function SLCMap(){
  const [locationInfo, setLocationInfo] = useState(null)

  const defaultProps = {
            center: {
            lat: 40.760780 ,
            lng: -111.891045
        },
          zoom: 11
        }

const {filteredSearchList} = useContext(PawsContext)

const mapMarkers = filteredSearchList.map((restaurant => 
    <LocationMarker
            key={restaurant.id}
            name={restaurant.name}
            address={restaurant.location.address1}
            lat= {restaurant.coordinates.latitude}
            lng={restaurant.coordinates.longitude}
            onClick={()=> setLocationInfo({name: restaurant.name, address: restaurant.location.address1, city: restaurant.location.city, phone: restaurant.display_phone, isHearted: restaurant.isHearted })}
/>
))

return (
  <div>
 
  <div className="map">
      <GoogleMapReact
          bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}}
          defaultCenter={ defaultProps.center}
          defaultZoom={ defaultProps.zoom }
          // yesIWantToUseGoogleMapApiInternals
        >
          {mapMarkers}
        </GoogleMapReact>
    {locationInfo && <LocationInfoBox info={locationInfo}/>}
  </div>
</div>
)
}



// function SLCMap (){

// const {markers} = useContext(PawsContext)

// const MapSLC = ({center, zoom}) => {

// const mapMarkers = markers.map((marker, index) => (
//   // return (
 
//       <LocationMarker
//             index={index}
//             key={marker.id}
//             lat={marker.latitude} 
//             lng={marker.longitude}
//           />
//     // return mapMarkers  
// ))

// return(
//       <div className="map">     
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}}
//           defaultCenter={ center}
//           defaultZoom={ zoom }
//         >
//           {mapMarkers}
//         </GoogleMapReact>
//       </div>
// )
// }
// MapSLC.defaultProps = {
//             center: {
//             lat: 40.760780 ,
//             lng: -111.891045
//         },
//           zoom: 11
//         }
//       }

// export default SLCMap



//EXAMPLE FROM GOOGLE-MAP-REACT GITHUB

// import React from "react";
// import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// export default function SimpleMap(){
//   const defaultProps = {
//     center: {
//       lat: 10.99835602,
//       lng: 77.01502627
//     },
//     zoom: 11
//   };

//   return (
//     // Important! Always set the container height explicitly
//     <div style={{ height: '100vh', width: '100%' }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: "" }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//       >
//         <AnyReactComponent
//           lat={59.955413}
//           lng={30.337844}
//           text="My Marker"
//         />
//       </GoogleMapReact>
//     </div>
//   );
// }

//ANOTHER EXAMPLE:
// export default function App() {
//   return (
//     <div className="App">
//       <GoogleMapReact
//         bootstrapURLKeys={{
//           key: "AIzaSyDiKc4HxX5G7EfneIZBN_Hlk2_luoT_yvo",
//           language: "en",
//           region: "US"
//         }}
//         defaultCenter={{ lat: 51.506, lng: -0.169 }}
//         defaultZoom={15}
//       >
//         {points.map(({ lat, lng, id, title }) => {
//           return (
//             <MyMarker
//               key={id}
//               lat={lat}
//               lng={lng}
//               text={id}
//               tooltip={title}
//             />
//           );
//         })}
//       </GoogleMapReact>
//     </div>
//   );
// }