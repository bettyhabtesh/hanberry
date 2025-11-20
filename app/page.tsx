import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero';
import MakeupIntro from '@/components/welcome';
import Features from '@/components/features';
export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <MakeupIntro/>
      <Features/>   
    </div>
  );
}
