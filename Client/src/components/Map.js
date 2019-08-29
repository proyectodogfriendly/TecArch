import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

import mapstyle from './map-style.json';

// const { google } = window

class Map extends Component {
   render() {
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 40.392442, lng: -3.697151 } }
        defaultZoom = { 15 }
        options = {{styles : mapstyle}}
      >
      </GoogleMap>
   ));
   
   return(
      <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: `700px`, width: '100%' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
         //  style={mapStyles}
         options = {{mapstyle}}
          
        />
      </div>
   );
   }
};
export default Map;