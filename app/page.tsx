import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero';
import MakeupIntro from '@/components/welcome';
import Features from '@/components/features';
import Book from '@/components/Book';
export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <MakeupIntro/>
      <Features/>   
      <Book/>
    </div>
  );
}
