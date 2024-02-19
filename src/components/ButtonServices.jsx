'use client';

import { handleSmoothScroll } from './Navbar';

function ButtonServices() {
  return (
    <button className="flex justify-start rounded-xl p-3 px-10 w-max bg-purple-950 border border-purple-600 text-white mt-12 mb-20">
      <a
        href="#contactanos"
        onClick={(e) => handleSmoothScroll(e, 'contactanos')}
      >
        Saber Mas
      </a>
    </button>
  );
}

export default ButtonServices;
