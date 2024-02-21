'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import footerPlant from '@/assets/img/footer-plant.svg';

const ContactForm = () => {
  const serviceId = process.env.SERVICE_ID;
  const password = process.env.PASSWORD;
  const publicKey = process.env.PUBLIC_KEY;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que todos los campos estén llenos
    const formIsValid = Object.values(formData).every(
      (value) => value.trim() !== ''
    );

    if (!formIsValid) {
      // Si algún campo está vacío, mostrar error y detener envío
      setErrors((prevErrors) => ({
        ...prevErrors,
        name:
          formData.name.trim() === ''
            ? 'Por favor, completa el campo Tu nombre'
            : '',
        email:
          formData.email.trim() === ''
            ? 'Por favor, completa el campo Tu correo electrónico'
            : '',
        message:
          formData.message.trim() === ''
            ? 'Por favor, completa el campo Tu mensaje'
            : '',
        phone:
          formData.phone.trim() === ''
            ? 'Por favor, completa el campo Tu número de teléfono'
            : '',
      }));
      return;
    }

    setLoading(true);

    emailjs
      .send(
        'service_r23ibao',
        'template_limwv9r',
        {
          from_name: formData.name,
          to_name: 'Miguel',
          from_email: formData.email,
          from_phone: formData.phone,
          to_email: 'contact@miguelhb.dev',
          message: formData.message,
        },
        'j7GCQJTxNegUzDVTy'
      )
      .then(() => {
        setLoading(false);
        Swal.fire({
          title: 'Perfecto!',
          text: 'Gracias. Nos pondremos en contacto contigo lo antes posible',
          icon: 'success',
        });

        setFormData({
          name: '',
          email: '',
          message: '',
          phone: '',
        });
        setErrors({
          name: '',
          email: '',
          message: '',
          phone: '',
        });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        Swal.fire({
          title: 'Losiento',
          text: 'Ups!, algo salió mal. Inténtalo de nuevo.',
          icon: 'error',
        });
      });
  };

  const Swal = require('sweetalert2');

  return (
    <div className="flex flex-col md:flex-row justify-center items-center mb-16">
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 text-start"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-xl font-bold mb-2"
          >
            Tu nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.name && 'border-red-500'
            }`}
            placeholder="Como te llamas?"
          />
          {errors.name && (
            <p className="text-red-500 text-xs italic">{errors.name}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-xl font-bold mb-2"
          >
            Tu correo electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.email && 'border-red-500'
            }`}
            placeholder="Cual es tu correo electrónico?"
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-gray-700 text-xl font-bold mb-2"
          >
            Tu número de teléfono
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={(e) => {
              const re = /^[0-9\b]+$/; // Expresión regular para permitir solo números
              if (
                e.target.value === '' ||
                (re.test(e.target.value) && e.target.value.length <= 9)
              ) {
                // Si es una entrada válida de números o campo vacío y la longitud es menor o igual a 9, actualiza el estado
                handleChange(e);
              }
            }}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.phone && 'border-red-500'
            }`}
            placeholder="Número de teléfono"
          />
          {errors.phone && (
            <p className="text-red-500 text-xs italic">{errors.phone}</p>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-700 text-xl font-bold mb-2"
          >
            Tu mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.message && 'border-red-500'
            }`}
            placeholder="Que desea decirnos?"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-xs italic">{errors.message}</p>
          )}
        </div>
        <div className="flex items-start justify-start">
          <button
            type="submit"
            disabled={loading}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              loading && 'opacity-50 cursor-not-allowed'
            }`}
          >
            {loading ? 'Enviando...' : 'Enviar'}
          </button>
        </div>
      </form>
      <div className="mt-4 md:mt-0 ml-0 md:ml-4">
        <Image
          src={footerPlant}
          width={795}
          height={273}
          alt="Service Icon"
          className="mx-auto md:mx-0"
        />
      </div>
    </div>
  );
};

export default ContactForm;
