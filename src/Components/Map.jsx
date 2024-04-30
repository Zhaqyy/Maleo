// import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
// const isMobile = window.innerWidth < 1100;

const libraries = ['places'];
const mapContainerStyle = {
  width: '100%',
  // height: isMobile? "500px" : '700px'
};
const center = {
  lat: 48.85721169424876, 
  lng: 2.308631425743891 
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