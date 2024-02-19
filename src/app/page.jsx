import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Technologies from '@/components/Technologies';
import Proyects from '@/components/Proyects';
import AboutUs from '@/components/AboutUs';
import Image from 'next/image';
import nubeImg from '@/assets/img/nube.svg';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function HomePage() {
  return (
    <div className="">
      <main className="mx-auto contenedor-main text-white">
        <section id="inicio">
          <Hero />
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
        <Image src={nubeImg} className="w-full" alt="Nube Layout" />
      </main>
      <div id="">
        <aside id="sobre-nosotros" className="gradient-background">
          <AboutUs />
          <div id="contactanos">
            <Contact />
          </div>
        </aside>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
