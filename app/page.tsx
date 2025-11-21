import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero';
import MakeupIntro from '@/components/welcome';
import Features from '@/components/features';
import AboutHamneal from '@/components/abouthamnel';
import MakeupGallery from '@/components/makeups';
import WorksInHome from '@/components/worksinhome';
export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <MakeupIntro/>
      <Features/>   
      <AboutHamneal/>
      <MakeupGallery/>
      <WorksInHome/>
    </div>
  );
}
