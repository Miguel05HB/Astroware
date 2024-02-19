'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import facebook from '@/assets/redes/facebook.webp';
import instagram from '@/assets/redes/instagram.webp';
import youtube from '@/assets/redes/youtube.webp';
import tiktok from '@/assets/redes/tik-tok.webp';
import whatsapp from '@/assets/redes/whatsapp.webp';

const socialMediaIcons = [
  {
    name: 'Facebook',
    iconPath: facebook,
    url: 'https://www.facebook.com/profile.php?id=61556293741530',
  },
  {
    name: 'Instagram',
    iconPath: instagram,
    url: 'https://www.instagram.com/astrowareorg/',
  },
  {
    name: 'Youtube',
    iconPath: youtube,
    url: 'https://www.youtube.com/@AstroWareorg',
  },
  {
    name: 'Tik Tok',
    iconPath: tiktok,
    url: 'https://www.tiktok.com/@astrowareinfo',
  },
  {
    name: 'Whatsapp',
    iconPath: whatsapp,
    url: 'https://wa.me/+51944558482',
  },
];

const SocialMediaBar = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsFixed(window.innerWidth > 1060);
    };

    // Ejecutar la función de manejo de redimensionamiento cuando la ventana cambie de tamaño
    window.addEventListener('resize', handleResize);

    // Limpia el listener del evento al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // La matriz vacía asegura que el efecto solo se ejecute una vez al montar el componente

  const containerStyle = {
    position: isFixed ? 'fixed' : 'absolute',
    top: '50%',
    left: '15px',
    transform: 'translateY(-50%)',
  };

  return (
    <div style={containerStyle} className="flex flex-col">
      {socialMediaIcons.map((socialMedia, index) => (
        <a key={index} href={socialMedia.url} className="mb-4" target="_blank">
          <Image
            src={socialMedia.iconPath}
            alt={socialMedia.name}
            width={32}
            height={32}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaBar;
