'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import facebook from '@/assets/redes/facebook.svg';
import instagram from '@/assets/redes/instagram.svg';
import youtube from '@/assets/redes/youtube.svg';
import tiktok from '@/assets/redes/tiktok.svg';
import whatsapp from '@/assets/redes/whatsapp.svg';

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

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const containerStyle = {
    position: isFixed ? 'fixed' : 'absolute',
    top: isFixed ? '50%' : '68%',
    left: '15px',
    transform: isFixed ? 'translateY(-50%)' : 'none',
    height: '150px',
    visibility: isFixed ? 'visible' : 'hidden',
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
