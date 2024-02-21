'use client';
import { useState } from 'react';

export const handleSmoothScroll = (event, targetId) => {
  event.preventDefault();
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const targetOffsetTop = targetElement.offsetTop - navbarHeight;
    window.scrollTo({
      behavior: 'smooth',
      top: targetOffsetTop,
    });
  }
};

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 navbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center justify-between w-full">
              {/* Nuevo cambio */}
              <div className="flex-shrink-0">
                <a
                  href="#inicio"
                  onClick={(e) => handleSmoothScroll(e, 'inicio')}
                >
                  <span className="text-xl font-bold text-gray-300">
                    Astroware
                  </span>
                </a>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4 text-sm">
                  <a
                    href="#inicio"
                    onClick={(e) => handleSmoothScroll(e, 'inicio')}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium"
                  >
                    Inicio
                  </a>
                  <a
                    href="#servicios"
                    onClick={(e) => handleSmoothScroll(e, 'servicios')}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium"
                  >
                    Servicios
                  </a>
                  <a
                    href="#tecnologias"
                    onClick={(e) => handleSmoothScroll(e, 'tecnologias')}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium"
                  >
                    Tecnologías
                  </a>
                  <a
                    href="#proyectos"
                    onClick={(e) => handleSmoothScroll(e, 'proyectos')}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium"
                  >
                    Proyectos
                  </a>
                  <a
                    href="#sobre-nosotros"
                    onClick={(e) => handleSmoothScroll(e, 'sobre-nosotros')}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium"
                  >
                    Sobre Nosotros
                  </a>
                  <a
                    href="#contactanos"
                    onClick={(e) => handleSmoothScroll(e, 'contactanos')}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium"
                  >
                    Contáctanos
                  </a>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setMenuOpen(!isMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                  <svg
                    className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:hidden w-44 rounded-lg`}
          style={{
            background: 'linear-gradient(180deg, black, purple)',
          }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#inicio"
              onClick={(e) => handleSmoothScroll(e, 'inicio')}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Inicio
            </a>
            <a
              href="#servicios"
              onClick={(e) => handleSmoothScroll(e, 'servicios')}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Servicios
            </a>
            <a
              href="#tecnologias"
              onClick={(e) => handleSmoothScroll(e, 'tecnologias')}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Tecnologías
            </a>
            <a
              href="#proyectos"
              onClick={(e) => handleSmoothScroll(e, 'proyectos')}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Proyectos
            </a>
            <a
              href="#sobre-nosotros"
              onClick={(e) => handleSmoothScroll(e, 'sobre-nosotros')}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Sobre Nosotros
            </a>
            <a
              href="#contactanos"
              onClick={(e) => handleSmoothScroll(e, 'contactanos')}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
