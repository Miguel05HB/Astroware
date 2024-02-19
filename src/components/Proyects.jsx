import projectImg1 from '@/assets/img/Proyect1.webp';
import projectImg2 from '@/assets/img/Proyect2.webp';
import projectImg3 from '@/assets/img/Proyect3.webp';
import Image from 'next/image';

function Proyecto({ tituloPequeño, titulo, descripcion, imagen, index }) {
  const reverse = index % 2 === 1;
  return (
    <div
      className={`flex flex-col lg:flex-row mb-16 w-full ${
        reverse && 'lg:flex-row-reverse'
      }`}
    >
      <div
        className={`mb-8 lg:mb-0 ${
          reverse ? 'lg:ml-8' : 'lg:mr-8'
        } w-full lg:w-1/2`}
      >
        <h2 className="text-xl font-bold mb-2 text-purple-800">
          {tituloPequeño}
        </h2>
        <h1 className="text-4xl font-bold mb-4">{titulo}</h1>
        <p className="text-lg mb-4 rounded-lg text-white border-s-2 border-purple-800 p-4 shadow-md">
          {descripcion}
        </p>
      </div>
      <div className={`relative w-full lg:w-1/2`}>
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden flex justify-center">
          <Image
            src={imagen}
            alt={titulo}
            priority={true}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

function Proyects() {
  const proyectos = [
    {
      tituloPequeño: 'Proyecto Web',
      titulo: 'Cake Fit - Ecommerce',
      descripcion:
        'Este proyecto web no solo ofrece exquisitos postres con bajos niveles de azúcar y grasas, sino que también proporciona una experiencia de usuario fluida con un carrito de compras intuitivo.',
      imagen: projectImg1,
    },
    {
      tituloPequeño: 'Proyecto  Android / IOS',
      titulo: 'Chems Pet',
      descripcion:
        'Chems Pet ofrece una experiencia de compra excepcional en Android e iOS. Cuenta catálogo de juguetes y accesorios, realiza compras seguras con opciones de pago convenientes.',
      imagen: projectImg2,
    },
    {
      tituloPequeño: 'Proyecto Web',
      titulo: 'Portafolio',
      descripcion:
        'Una ventana visual a la narrativa de diseño que hemos creado. Desde identidades de marca hasta ilustraciones cautivadoras, cada proyecto es una expresión única.',
      imagen: projectImg3,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4">
      <h1 className="text-5xl mb-12 font-bold mt-5">Proyectos</h1>

      <div className="max-w-4xl w-full">
        {proyectos.map((proyecto, index) => (
          <Proyecto
            key={index}
            tituloPequeño={proyecto.tituloPequeño}
            titulo={proyecto.titulo}
            descripcion={proyecto.descripcion}
            imagen={proyecto.imagen}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Proyects;
