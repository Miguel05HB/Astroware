import CircleIcon from './CircleIcon';
import imagen from '@/assets/img/universe-logo.webp';

// Iconos de Tecnologias
import icon1 from '@/assets/icons/icon1.webp';
import icon2 from '@/assets/icons/icon2.webp';
import icon3 from '@/assets/icons/icon3.webp';
import icon4 from '@/assets/icons/icon4.webp';
import icon5 from '@/assets/icons/icon5.webp';
import icon6 from '@/assets/icons/icon6.webp';
import icon7 from '@/assets/icons/icon7.webp';
import icon8 from '@/assets/icons/icon8.webp';
import icon9 from '@/assets/icons/icon9.webp';
import icon10 from '@/assets/icons/icon10.webp';
import icon11 from '@/assets/icons/icon11.webp';
import icon12 from '@/assets/icons/icon12.webp';
import icon13 from '@/assets/icons/icon13.webp';
import Image from 'next/image';

function Technologies() {
  const icons = [
    icon1,
    icon2,
    icon3,
    icon4,
    icon5,
    icon6,
    icon7,
    icon8,
    icon9,
    icon10,
    icon11,
    icon12,
    icon13,
  ];

  const languages = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'PHP',
    'Python',
    'Flutter',
    'SqlServer',
    'Wordpress',
    'Tailwind Css',
    'Java',
    'Astro',
    'MongoDB',
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-5xl mb-12 font-bold mt-5">Tecnologías</h1>
        <h2 className="text-2xl">
          En AstroWare, construimos páginas
          <a className="text-purple-800"> web personalizadas</a> utilizando las
          últimas y más <br />
          potentes tecnologías.
        </h2>
        <p className="text-base text-gray-700 dark:text-gray-400  mt-8">
          Nuestra empresa de desarrollo de software se compromete con la
          excelencia al integrar tecnologías avanzadas para asegurar un diseño
          moderno y una experiencia de usuario excepcional. Además, destacamos
          por adoptar un enfoque sostenible en nuestro desarrollo, utilizando
          tecnologías avanzadas para garantizar eficiencia y responsabilidad
          ambiental. Al incorporar sistemas de gestión de contenido como
          WordPress, facilitamos la administración de sitios web. Descubre la
          fusión única de tecnología moderna y compromiso ecológico que impulsa
          tu presencia en línea hacia un futuro sostenible.
        </p>
        <div className="p-8">
          <div className="flex flex-wrap justify-center gap-4">
            {icons.slice(0, 7).map((icon, index) => (
              <CircleIcon key={index} icon={icon} language={languages[index]} />
            ))}
          </div>
          <br />
          <div className="flex flex-wrap justify-center gap-4">
            {icons.slice(7).map((icon, index) => (
              <CircleIcon
                key={index + 7}
                icon={icon}
                language={languages[index + 7]}
              />
            ))}
          </div>
        </div>

        <Image
          src={imagen}
          priority={true}
          width={780}
          height={380}
          alt="Universo astroware"
          className="mx-auto mb-16"
        />
      </div>
    </div>
  );
}

export default Technologies;
