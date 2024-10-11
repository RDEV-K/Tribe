import React, { useEffect, useState } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  Marker
} from "@react-google-maps/api";

const GoogleMaps = () => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const defaultCenter = { lat: 39.113014, lng: -105.358887 };
  const [center, setCenter] = useState({
    lat: defaultCenter.lat,
    lng: defaultCenter.lng,
  });

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey
  });

  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       const userLocation = {
  //         lat: position.coords.latitude,
  //         lng: position.coords.longitude,
  //       };
  //       setCenter(userLocation);
  //     });
  //   }
  // }, []);

  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={6}
      options={{ mapTypeControl: false }}
    >
      {/* <Marker position={{ lat: center.lat, lng: center.lng }} /> */}
    </GoogleMap>
  ) : null;
};

export default GoogleMaps;
