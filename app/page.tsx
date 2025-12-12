import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero';
import MakeupIntro from '@/components/welcome';
import Features from '@/components/features';
import AboutHamneal from '@/components/abouthamnel';
import MakeupGallery from '@/components/makeups';
import WorksInHome from '@/components/worksinhome';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
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
      <Contact/>
      <Footer/>
    </div>
  );
}