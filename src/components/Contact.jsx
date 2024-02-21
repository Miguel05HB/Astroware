import React from 'react';
import Image from 'next/image';
import ContactForm from './ContactForm';
import whatsappIcon from '@/assets/redes/whatsapp.svg';
import gmailIcon from '@/assets/redes/gmail.webp';

function Contact() {
  return (
    <div className="min-h-screen flex justify-center items-center text-center px-4">
      <div className="max-w-4xl">
        <h1 className="text-5xl mb-6 font-bold mt-5">Contactanos</h1>
        <p className="text-start mb-6">
          ¿Listo para llevar tu proyecto al siguiente nivel? Nos encantaría ser
          parte de tu éxito. Conéctate con nosotros para explorar cómo nuestros
          servicios de desarrollo de software pueden transformar tus ideas en
          soluciones digitales.
        </p>
        <div className="flex flex-col space-y-4 mb-8">
          <h2 className="text-lg font-semibold mb-2 text-start">
            Contacto Directo
          </h2>
          <div className="flex items-center mb-2">
            <Image src={whatsappIcon} alt="WhatsApp" width={30} height={30} />
            <span className="ml-2">+51 944 558 482</span>
          </div>
          <div className="flex items-center">
            <Image src={gmailIcon} alt="Gmail" width={30} height={30} />
            <span className="ml-2">astrowareorg@gmail.com</span>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
