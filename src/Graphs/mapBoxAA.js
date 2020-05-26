import React, {useState} from 'react';
import ReactMapGL, {Marker} from "react-map-gl";
import * as data from "./exampleSkate.json";



function App() {

  const [viewport, setViewport] = useState({
    width: "96%",
    height: 500,
    latitude: 36.954117,
    longitude: -122.030799,
    zoom: 12
  });



  return (
    
    /*
    must return a single JSX element, so wrap in a div
    */
    

    <div className="App">

      <ReactMapGL {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/hfox999/ck6crjgkn0bfs1imqs16f84wz"
      onViewportChange={viewport => {
        setViewport(viewport);
      }}  
      >

{data.features.map((strand) => (
        <Marker key = {strand.properties.PARK_ID}
        latitude = {strand.geometry.coordinates[0]}
        longitude = {strand.geometry.coordinates[1]}>

        <button class = "marker-btn">

        <img src = "/redpin.svg" />

        </button>


        </Marker>




        ) )}

  
      
      
      </ReactMapGL>

    </div>
  );
}

export default App;