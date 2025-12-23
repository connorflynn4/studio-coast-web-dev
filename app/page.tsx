import Background from '@/components/Background';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Capabilities from '@/components/Capabilities';
import InteractiveGraphic from '@/components/InteractiveGraphic';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <Hero />
      <Services />
      <Capabilities />
      <InteractiveGraphic />
      <Process />
      <Contact />
      <Footer />
    </>
  );
}

