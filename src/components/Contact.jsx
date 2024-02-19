import React from 'react';
import Image from 'next/image';
import ContactForm from './ContactForm';
import whatsappIcon from '@/assets/redes/whatsapp.webp';
import gmailIcon from '@/assets/redes/gmail.webp';

function Contact() {
  return (
    <div className="min-h-screen flex justify-center items-center px-4 text-center">
      <div className="max-w-4xl">
        <h1 className="text-5xl mb-12 font-bold mt-5">Contactanos</h1>
        <p className="text-start">
          ¿Listo para llevar tu proyecto al siguiente nivel? Nos encantaría ser
          parte de tu éxito. Conéctate con nosotros para explorar cómo nuestros
          servicios de desarrollo de software pueden transformar tus ideas en
          soluciones digitales.
        </p>
        <div className="mt-8 flex flex-col items-start justify-center space-y-4 mb-8">
          <h1>Contacto Directo</h1>
          <div className="flex items-center">
            <Image src={whatsappIcon} alt="WhatsApp" width={30} height={30} />
            <span className="ml-2">Whatsapp: +51 944 558 482</span>
          </div>
          <div className="flex items-center">
            <Image src={gmailIcon} alt="Gmail" width={30} height={30} />
            <span className="ml-2">
              Correo Electrónico: astrowareorg@gmail.com
            </span>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
