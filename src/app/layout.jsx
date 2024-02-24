import Navbar from '@/components/Navbar';
import './globals.css';
import { Poppins } from 'next/font/google';
import SocialMediaBar from '@/components/SocialMediaBar';
import StarsCanvas from '@/components/StarBackground';
import Hero from '@/components/Hero';

const inter = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: 'Astroware | Desarrollo Web y Android',
  description:
    'Creación de páginas web y apps Android. Innovación digital para impulsar tu presencia en línea. Descubre el futuro digital en Astroware.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} overflow-y-scroll overflow-x-hidden`}
      >
        <Navbar />
        <div className="absolute top-0 w-full h-[810px] flex flex-col gap-20 justify-center items-center z-0">
          <Hero />
        </div>
        <StarsCanvas />
        <SocialMediaBar />
        {children}
      </body>
    </html>
  );
}
