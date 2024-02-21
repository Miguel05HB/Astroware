import React from 'react';
import imageHome from '@/assets/img/home.webp';
import Image from 'next/image';

function Hero() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="text-center mb-14">
        <div className="mx-auto" style={{ maxWidth: '70vw' }}>
          <Image
            src={imageHome}
            priority={true}
            className="inline-block"
            width={700}
            height={500}
            alt="AstroWare"
          />
        </div>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mt-14">
          Más Allá del Diseño,
          <br />
          Creamos
          <a className="text-purple-800"> conexiones digitales</a>
          <span>...</span>
        </p>
      </div>
      <div className="bg-transparent border border-white p-3">
        <p className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-bold">
          Hosting y Dominio gratis el primer año.
        </p>
      </div>
    </div>
  );
}

export default Hero;
