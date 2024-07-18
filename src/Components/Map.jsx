// import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
// const isMobile = window.innerWidth < 1100;

const libraries = ['places'];
const mapContainerStyle = {
  width: '100%',
  // height: isMobile? "500px" : '700px'
};
const center = {
  lat: 48.6060095254942, 
  lng: 2.3641222000000006 
};

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDp6nTO_iDzdD8sHYcCxyGJG4RQUZRSkgI',
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={18}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default Map;