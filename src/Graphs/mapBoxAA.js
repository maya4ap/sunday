import React, {useState} from 'react';
import ReactMapGL, {Marker} from "react-map-gl";
import * as data from "./exampleSkate.json";

//you dont need to type myinfo.js since it is default file for import

function App() {

  const [viewport, setViewport] = useState({
    width: "100%",
    height: 700,
    latitude: 36.954117,
    longitude: -122.030799,
    zoom: 13
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
      <Marker
        latitude={36.964917}
        longitude= {-122.015892}
        
      >
      {/* <div> POINT</div> */}
      <button>
          <img src = "/redpin.svg" alt = "Icon"/>
       </button>
  </Marker>
      
      
      </ReactMapGL>

    </div>
  );
}

export default App;