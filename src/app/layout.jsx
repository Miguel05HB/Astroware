import Navbar from '@/components/Navbar';
import './globals.css';
import { Poppins } from 'next/font/google';
import SocialMediaBar from '@/components/SocialMediaBar';

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
        <SocialMediaBar />
        {children}
      </body>
    </html>
  );
}
