// import React from 'react';
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
// const isMobile = window.innerWidth < 1100;

// const libraries = ["places"];
// const mapContainerStyle = {
//   width: "100%",
//   // height: isMobile? "500px" : '700px'
// };
// const center = {
//   lat: 48.6060095254942,
//   lng: 2.3641222000000006,
// };

const Map = () => {
  // const { isLoaded, loadError } = useLoadScript({
  //   googleMapsApiKey: "AIzaSyDp6nTO_iDzdD8sHYcCxyGJG4RQUZRSkgI",
  //   libraries,
  // });

  // if (loadError) {
  //   return <div>Error loading maps</div>;
  // }

  // if (!isLoaded) {
  //   return <div>Loading maps</div>;
  // }

  return (
    <>
      {/* <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={18}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap> */}
      <iframe
        src="https://www.openstreetmap.org/export/embed.html?bbox=2.357221841812134%2C48.60322618802484%2C2.3710191249847417%2C48.608341174115274&amp;layer=mapnik&amp;marker=48.60578019867944%2C2.3641204833984375"
        
      ></iframe>
      <br />
      <small>
        <a href="https://www.openstreetmap.org/?mlat=48.60578&amp;mlon=2.36412#map=17/48.60578/2.36412">
          View Larger Map
        </a>
      </small>
    </>
  );
};

export default Map;
