'use client';

import { useEffect } from 'react';
import L from 'leaflet';
import { useMap } from 'react-leaflet';
import dynamic from 'next/dynamic';
import type { LatLngTuple } from 'leaflet';

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });

const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });

const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });

const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

const ChangeView = ({ position }: { position: LatLngTuple }) => {
  const map = useMap();

  useEffect(() => {
    map.flyTo(position, 15, { duration: 1.2 });
  }, [map, position]);

  return null;
};

const ClientMap = ({ position, address }: { position: LatLngTuple; address: string }) => {
  const icon = L.icon({
    iconUrl: '/map_images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    shadowUrl: '/map_images/marker-shadow.png',
  });
  return (
    <div className='h-100 w-full overflow-hidden rounded-xl border border-gray-200'>
      <MapContainer center={position} zoom={15} scrollWheelZoom={false} className='-z-10 h-full w-full'>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />

        <Marker position={position} icon={icon}>
          <Popup>{address}</Popup>
        </Marker>

        <ChangeView position={position} />
      </MapContainer>
    </div>
  );
};

export default ClientMap;
