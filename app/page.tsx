import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import Services from '@/app/components/Services';
import Pricing from '@/app/components/Pricing';
import Gallery from '@/app/components/Gallery';
import Testimonials from '@/app/components/Testimonials';
import Booking from '@/app/components/Booking';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Gallery />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
