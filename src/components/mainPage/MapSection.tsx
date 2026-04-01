'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
const ClientMap = dynamic(() => import('@/components/mainPage/ClientMap'), {
  ssr: false,
  loading: () => <div className='h-100 w-full animate-pulse rounded-xl bg-gray-200' />,
});
import type { LatLngTuple } from 'leaflet';

const cities: Array<{ name: string; coords: LatLngTuple; address: string }> = [
  { name: 'Київ', coords: [50.493883, 30.42419], address: 'вул. Полкова, 74/6' },
  { name: 'Львів', coords: [49.847323, 24.018884], address: 'вул. Базарна, 26' },
  { name: 'Одеса', coords: [46.471883, 30.721287], address: 'вул. Мʼясоїдівська вулиця, 7' },
  { name: 'Кропивницький', coords: [48.510991, 32.270357], address: 'вул. Пашутинська 18/40' },
];

const MapSection = () => {
  const [position, setPosition] = useState<LatLngTuple>(cities[0].coords);
  const [address, setAddress] = useState(cities[0].address);

  const onClickButton = (markerPosition: LatLngTuple, markerAddress: string) => {
    setPosition(markerPosition);
    setAddress(markerAddress);
  };

  return (
    <section className='mb-20 md:mb-25 xl:mb-30'>
      <div className='container'>
        <h2 className='text-surfaceTxt mb-4 text-2xl font-bold md:mb-8 xl:mb-10 xl:text-4xl'>Де нас знайти?</h2>
        <div className='mb-6 flex flex-row flex-wrap gap-4 md:mb-8 md:flex-nowrap md:gap-8 xl:mb-10 xl:gap-10'>
          {cities.map((city, index) => {
            const isActive = position === city.coords;
            return (
              <button
                key={index}
                className={`hover:bg-secondary hover:text-surface focus:bg-secondary focus:text-surface active:bg-secondary active:text-surface rounded px-4 py-2 shadow-(--shadow-hover) delay-300 md:mb-8 xl:mb-10 ${isActive ? 'bg-secondary text-surface border-none' : 'bg-secondaryMuted border-secondary text-surfaceTxt border'}`}
                onClick={() => onClickButton(city.coords, city.address)}
              >
                {city.name}
              </button>
            );
          })}
        </div>
        <ClientMap position={position} address={address} />
      </div>
    </section>
  );
};

export default MapSection;
