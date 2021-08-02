// import React from "react"
// import GoogleMapReact from "google-map-react"
// From latlong.net:
// Salt Lake City=  lat:  40.760780  lng: -111.891045
// NOTE:  website Snazzy Maps has alternatives styles for the Google Maps, if don't want the default

// import React, { useContext} from "react"
// import "./SLCMap.css"
// import GoogleMapReact from 'google-map-react';
// import LocationMarker from "./LocationMarker"
// import { PawsContext} from "./PawsContext"


// function SLCMap (){

// const {markers} = useContext(PawsContext)

// //  const coords = dogFriendlyRestaurants.map(restaurant=>{return {lat: restaurant.coordinates.latitude, lng: restaurant.coordinates.longitude}})
// //  console.log (coords)
// //above 2 lines work to return coords

// const MapSLC = ({center, zoom}) => {

// MapSLC.defaultProps = {
//             center: {
//             lat: 40.760780 ,
//             lng: -111.891045
//         },
//           zoom: 11
//         }

// const mapMarkers = markers.map(marker =>{ 
//   return (
//      <LocationMarker
//             lat={marker.latitude} 
//             lng={marker.longitude}
//           />
       
// )
// // return mapMarkers
// })
// return (
//       <div className = "map">     
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}}
//           defaultCenter={ center}
//           defaultZoom={ zoom }
//         >
//             {markers}
//         </GoogleMapReact>
//       </div>
// )}

          
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