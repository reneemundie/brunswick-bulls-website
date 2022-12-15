// import React, { useMemo } from 'react';
import React from 'react';
import './Home.css';
import Gameday from '../../assets/gameday.png';
import VideoBanner from '../../assets/video.mp4';
// import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';


export default function Home () {
  return (
    <>
            <div className="image">
            <img src={ Gameday } alt="Bulls versus Tigers, 14 November 2022, Melbourne Sports Center, 7 o'clock PM" id="game-day"/>
            </div>

            <div className="video">
                <video width="100%" height="100%" autoPlay loop muted><source src={ VideoBanner } alt="video" id="video" /></video>
            </div>
    </>
  );

  // function Location() {
  //   const { isLoaded } = useLoadScript({
  //     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  //   });
  
  //   if (!isLoaded) {
  //     return null;
  //   }
  //   return <Map />;
  // }
   
  // function Map() {
  //       const center = useMemo(() => ({ lat: -37.84286, lng: 144.96184 }), []);
  
  //       return (
  //       <GoogleMap zoom={ 10 } center={ center } mapContainerClassName="map-container">
  //         <Marker position={ center } />
  //       </GoogleMap>
  //   );
  // }
}