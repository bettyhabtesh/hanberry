import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero';
import MakeupIntro from '@/components/welcome';
import Features from '@/components/features';
import Book from '@/components/Book';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <MakeupIntro/>
      <Features/>   
      <Book/>
      <Contact/>
      <Footer/>
    </div>
  );
}
