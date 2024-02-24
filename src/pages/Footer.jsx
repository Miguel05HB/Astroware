'use client';
import { socialMediaIcons } from '@/components/SocialMediaBar';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const SocialMediaIcons = () => (
  <div className="flex gap-4 mb-5">
    {socialMediaIcons.map((icon, index) => (
      <a key={index} href={icon.url} target="_blank" rel="noopener noreferrer">
        <Image src={icon.iconPath} alt={icon.name} className="h-8 w-8" />
      </a>
    ))}
  </div>
);

const Footer = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowSize.width < 1060;

  return (
    <footer className="bg-black py-6">
      <div className="container mx-auto flex flex-col items-center">
        {isMobile && <SocialMediaIcons />}
        <p className="text-center text-gray-300">
          © 2024 AstroWare. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
