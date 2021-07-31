// import React from "react"
// import GoogleMapReact from "google-map-react"

// From latlong.net:
// Salt Lake City=  lat:  40.760780  lng: -111.891045
//NOTE:  website Snazzy Maps has alternatives styles for the Google Maps, if don't want the default

// import React from 'react';
import "./SLCMap.css"
import GoogleMapReact from 'google-map-react';
import LocationMarker from "./LocationMarker"
//*****need to bring in contextconsumer to get at the Yelp array*****


// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// class SLCMap extends Component {
     

//   render() {


   const SLCMap = ({center, zoom}) => {
   return(  

                  
      <div className = "map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}}
          defaultCenter={ center}
          defaultZoom={ zoom }
        >
          <LocationMarker 
          lat={center.lat} 
          lng={center.lng}
          />

        </GoogleMapReact>
      </div>
      )}
            SLCMap.defaultProps = {
            center: {
            lat: 40.760780 ,
            lng: -111.891045
        },
          zoom: 11
    
    }
      
  
  // }}
   
  
export default SLCMap