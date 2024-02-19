import React from 'react';
import iconService from '@/assets/img/iconservice1.webp';
import iconService2 from '@/assets/img/iconservice2.webp';
import iconService3 from '@/assets/img/iconservice3.webp';
import iconService4 from '@/assets/img/iconservice4.webp';
import Image from 'next/image';
import ButtonServices from './ButtonServices';

function Services() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4">
      <h1 className="text-5xl mb-12 font-bold mt-5">Servicios</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        <ServiceCard
          image={iconService}
          title="Diseño y Desarrollo Web"
          description="Desde sitios elegantes hasta aplicaciones intuitivas, creamos soluciones web personalizadas que destacan y potencian tu presencia digital. Descubre el poder de la innovación web con nosotros."
        />
        <ServiceCard
          image={iconService2}
          title="Mejoras UX/UI"
          description="Desde interfaces cautivadoras hasta experiencias de usuario intuitivas, transformamos tus aplicaciones y sitios web existentes. Descubre el poder de una estética excepcional combinada con funcionalidad mejorada."
        />
        <ServiceCard
          image={iconService3}
          title="Diseño y Desarrollo Móvil"
          description="Desarrollamos aplicaciones móviles a medida para tu negocio. Desde el diseño hasta la implementación, llevamos tus ideas al mundo digital de forma ágil y efectiva."
        />
        <ServiceCard
          image={iconService4}
          title="Optimización de Software"
          description="Potencia tu software con nuestra optimización experta. Mejoramos el rendimiento para una experiencia más eficiente. Descubre el poder de un software más ágil y eficaz con nosotros. ¡Optimiza, mejora, destaca!"
        />
      </div>
      <ButtonServices />
    </div>
  );
}

function ServiceCard({ image, title, description }) {
  return (
    <div className="flex flex-col items-center max-w-md bg-gradient-to-br from-purple-800 to-black rounded-lg shadow p-6">
      <Image
        src={image}
        width={110}
        height={110}
        alt="Service Icon"
        className="mb-4"
      />
      <div className="text-center">
        <h5 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="text-base text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Services;
