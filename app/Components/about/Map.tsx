// components/MapComponent.js
"use client"

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


export default function MapComponent() {
  // useEffect(() => {
  //   // Fix for SSR (Server-Side Rendering) in Next.js
  //   // if (typeof window !== 'undefined') {
  //     require('leaflet/dist/leaflet.css');
  //   // }
  // }, []);

  return (
      <>
    <MapContainer className='lg:mt-10' center={[6.5289, 3.5194]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[6.5289, 3.5194]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
    </>
  );
}
