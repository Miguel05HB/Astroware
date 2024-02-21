function AboutUs() {
  return (
    <div className="min-h-screen flex justify-center items-center px-4 text-start">
      <div className="max-w-4xl">
        <h1 className="text-5xl mb-12 font-bold text-center">Sobre Nosotros</h1>
        <div
          className="text-md bg-white rounded-3xl p-8 md:p-14 shadow-md"
          style={{
            backgroundColor: 'rgb(200, 199, 250)',
            borderTopRightRadius: 0,
            borderBottomLeftRadius: 0,
          }}
        >
          <h1 className="text-xl font-bold mb-3 text-center">
            ¿Quienes Somos?
          </h1>
          <hr
            className="mb-3 rounded-xl"
            style={{
              background:
                'linear-gradient(to right, #13ADC7, #6978D1, #945DD6)',
              height: '3px',
              border: 'none',
            }}
          />
          <p>
            Somos un equipo de profesionales altamente especializados, cada uno
            enfocado en su área de experiencia, en Astroware hemos perfeccionado
            el arte del desarrollo web y análisis de datos durante los últimos
            cuatro años. Esta trayectoria nos ha permitido perfeccionar nuestros
            procesos y garantizar que cada proyecto sea ejecutado con rapidez y
            precisión. Nuestra combinación de experiencia y dedicación nos
            distingue, permitiéndonos crear soluciones que no solo cumplen, sino
            que superan las expectativas. Confía en nosotros para llevar tu
            visión al siguiente nivel y destacar en el mundo digital con
            resultados atractivos y efectivos.
          </p>
        </div>

        <div className="flex flex-col md:flex-row mt-8 gap-y-8 md:gap-x-8 mb-14">
          <div
            className="text-md bg-white rounded-3xl p-8 md:p-14 shadow-md"
            style={{
              backgroundColor: 'rgb(200, 199, 250)',
              borderTopRightRadius: 0,
              borderBottomLeftRadius: 0,
            }}
          >
            <h1 className="text-xl font-bold mb-3 text-center">Visión</h1>
            <hr
              className="mb-3 rounded-xl"
              style={{
                background:
                  'linear-gradient(to right, #13ADC7, #6978D1, #945DD6)',
                height: '3px',
                border: 'none',
              }}
            />
            <p>
              Ser la fuerza propulsora que guía a empresas e individuos hacia la
              cima de la innovación digital. Queremos ser reconocidos como la
              chispa que enciende las ideas, transformándolas en experiencias
              digitales extraordinarias que definen el futuro.
            </p>
          </div>
          <div
            className="text-md bg-white rounded-3xl p-8 md:p-14 shadow-md"
            style={{
              backgroundColor: 'rgb(200, 199, 250)',
              borderTopRightRadius: 0,
              borderBottomLeftRadius: 0,
            }}
          >
            <h1 className="text-xl font-bold mb-3 text-center">Misión</h1>
            <hr
              className="mb-3 rounded-xl"
              style={{
                background:
                  'linear-gradient(to right, #13ADC7, #6978D1, #945DD6)',
                height: '3px',
                border: 'none',
              }}
            />
            <p>
              Es superar las expectativas, ofreciendo soluciones web y
              experiencias digitales de calidad excepcional. Con compromiso,
              velocidad e innovación, nos esforzamos por ser el socio preferido
              en el camino de cada cliente hacia el éxito digital.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
