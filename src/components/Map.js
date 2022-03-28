import React  from 'react';
// import OpenLayers from './OpenLayers';

class Map extends React.Component {

    componentDidMount() {
        const script = document.createElement('script');
        script.src = 'http://js.hs-scripts.com/8492701.js';
        document.body.appendChild(script);
    }
    
    render() {

        var OpenLayers = require('./OpenLayers.js');

          var lat1 = 23.19421944652721;
          var lon1 = 72.60818781565484;	
          
          var lat2 = 51.500469141004125;
          var lon2 = -0.4198666378534685;	

          var lat3 = 40.7585566;
          var lon3 = -74.0535681;
          
          var zoom = 1;
      
          var fromProjection = new OpenLayers.Projection("EPSG:4326");   // Transform from WGS 1984
          var toProjection = new OpenLayers.Projection("EPSG:900913"); // to Spherical Mercator Projection
          var position1 = new OpenLayers.LonLat(lon1, lat1).transform( fromProjection, toProjection);
          var position2 = new OpenLayers.LonLat(lon2, lat2).transform( fromProjection, toProjection);
          var position3 = new OpenLayers.LonLat(lon3, lat3).transform( fromProjection, toProjection);
      
          map = new OpenLayers.Map("Map");
          var mapnik = new OpenLayers.Layer.OSM();
          map.addLayer(mapnik);
      
          var markers = new OpenLayers.Layer.Markers( "Markers" );
          map.addLayer(markers);
          markers.addMarker(new OpenLayers.Marker(position1));
          markers.addMarker(new OpenLayers.Marker(position2));
          markers.addMarker(new OpenLayers.Marker(position3));
      
          map.setCenter(position1, zoom);

        return (
            <div>
            </div>
        );
    }
}

export default Map;