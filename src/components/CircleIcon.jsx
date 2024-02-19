import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

const CircleIcon = ({ icon, language }) => {
  return (
    <div
      className="flex items-center justify-center w-16 h-16 rounded-full"
      style={{ backgroundColor: '#251C31' }}
    >
      <Image
        src={icon}
        height={0}
        width={0}
        priority={true}
        alt={`Icono ${language}`}
      />
    </div>
  );
};

CircleIcon.propTypes = {
  icon: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
};

export default CircleIcon;
