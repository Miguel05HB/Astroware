import React from 'react';
import imageHome from '@/assets/img/home.webp';
import Image from 'next/image';

function Hero() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="text-center">
        <div className="mb-4 mx-auto" style={{ maxWidth: '90vw' }}>
          <Image
            src={imageHome}
            priority={true}
            className="inline-block mb-32"
            width={800}
            height={600}
            alt="AstroWare"
          />
        </div>
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
          Más Allá del Diseño,
          <br />
          Creamos
          <a className="text-purple-800"> conexiones digitales</a>
          <span>...</span>
        </p>
      </div>
      <div className="bg-transparent border border-white p-4 mt-24">
        <p className="text-sm  md:text-xl lg:text-lg xl:text-2xl font-bold">
          Hosting y Dominio gratis el primer año.
        </p>
      </div>
    </div>
  );
}

export default Hero;
