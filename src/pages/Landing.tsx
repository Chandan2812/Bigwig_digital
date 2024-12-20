import Nav from '../components/Nav';
import Footer from '../components/Footer';
import CaseCard from '../components/CaseCard';
import Hero from '../components/Hero';
import FlipCard from '../components/FlipCard';
import ScrollOverlappingSections from '../components/ScrollSection';
import AboutUs from '../components/About';
import FAQ from '../components/Faq';
import { useEffect, useState } from 'react';
import Blog from '../components/Blog';
import ImageSlider from '../components/ImageSlider';
import ContactUs from '../components/Contact';
import { FaRegMessage } from "react-icons/fa6";


function Landing() {
  const [isVisible, setIsVisible] = useState(false);
  const [isContactPanelOpen, setIsContactPanelOpen] = useState(false);

  // Handle scroll to top button visibility
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const openContactPanel = () => {
    setIsContactPanelOpen(true);
  };

  const closeContactPanel = () => {
    setIsContactPanelOpen(false);
  };

  return (
    <>
      <Nav />
      <Hero />
      <ScrollOverlappingSections />
      <FlipCard />
      <CaseCard />
      <Blog />
      <AboutUs />
      <ImageSlider />
      <FAQ />
      <Footer />

      {/* Scroll and Contact Us Buttons */}
      {isVisible && (
        <div className="fixed bottom-10 right-2 flex flex-col items-center space-y-4 z-50">
          <button
            onClick={openContactPanel}
            className="bg-blue-500 text-white py-4 px-4 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 hover:scale-110"
            title='Contact Us'
          >
            <FaRegMessage className='size-5 '/>
          </button>
          <button
            onClick={scrollToTop}
            className="bg-black text-white w-12 h-12 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 flex items-center justify-center"
            title='Scroll Top'
          >
            ↑
          </button>
        </div>
      )}

      <div
  className={`fixed top-14 right-0 w-80 h-4/5 bg-gray-100 rounded-lg shadow-lg p-6 z-50 transform ${
    isContactPanelOpen ? 'translate-x-0' : 'translate-x-full'
  } transition-transform duration-300 ease-in-out flex flex-col justify-center`}
>
  <button
    onClick={closeContactPanel}
    className="absolute top-4 left-4 text-gray-500 hover:text-gray-800"
  >
    ✖
  </button>
  <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
  <div className="overflow-y-auto max-h-[calc(100vh-100px)]">
    <ContactUs />
  </div>
</div>
    </>
  );
}


export default Landing;
