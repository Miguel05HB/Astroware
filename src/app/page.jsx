import Main from '@/pages/Main';
import Services from '@/pages/Services';
import Technologies from '@/pages/Technologies';
import Proyects from '@/pages/Proyects';
import AboutUs from '@/pages/AboutUs';
import Contact from '@/pages/Contact';
import Footer from '@/pages/Footer';

function HomePage() {
  return (
    <div className="">
      <main className="mx-auto contenedor-main text-white">
        <section id="inicio">
          <Main />
        </section>
        <section id="servicios">
          <Services />
        </section>
        <section id="tecnologias">
          <Technologies />
        </section>
        <section id="proyectos">
          <Proyects />
        </section>
        <aside id="sobre-nosotros">
          <AboutUs />
          <div id="contactanos">
            <Contact />
          </div>
        </aside>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
