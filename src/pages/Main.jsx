import React from 'react';
import imageHome from '@/assets/img/home.webp';
import Image from 'next/image';
import Hero from '@/components/Hero';

function MainPage() {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen">
      <div className="absolute top-0 w-full h-[810px] flex flex-col gap-20 justify-center items-center z-0">
        <Hero />
      </div>
      <div className="text-center mb-14 z-10">
        <div className="mx-auto" style={{ maxWidth: '70vw' }}>
          <Image
            src={imageHome}
            priority={true}
            className="inline-block mt-24"
            width={700}
            height={'auto'}
            alt="AstroWare"
          />
        </div>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mt-14">
          Más Allá del Diseño,
          <br />
          Creamos
          <span className="text-purple-800"> conexiones digitales</span>
          <span>...</span>
        </p>
      </div>
      <div className="bg-transparent border border-white p-3 z-10">
        <p className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-bold">
          Hosting y Dominio gratis el primer año.
        </p>
      </div>
    </div>
  );
}

export default MainPage;
