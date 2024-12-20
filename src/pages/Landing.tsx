
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import CaseCard from '../components/CaseCard'
import Hero from '../components/Hero'
import FlipCard from '../components/FlipCard'
import ScrollOverlappingSections from '../components/ScrollSection'
import AboutUs from '../components/About'
import FAQ from '../components/Faq'
import { useEffect, useState } from 'react'
import Blog from '../components/Blog'
import ImageSlider from '../components/ImageSlider'
import ContactUs from '../components/Contact'

function Landing() {
  const [isVisible, setIsVisible] = useState(false);
    
  // Handle scroll to top button visibility
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
    <Nav/>
    <Hero/>
    <FlipCard/>
    <ScrollOverlappingSections/>
    <CaseCard/>
    <Blog/>
    <AboutUs/>
    <ImageSlider/>
    <FAQ/>
    <ContactUs/>
    <Footer/>
    {isVisible && (
        <button
          onClick={scrollToTop}
          className="z-50 fixed bottom-10 right-10 bg-black text-white w-12 h-12 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 flex items-center justify-center"
        >
          ↑
        </button>
      )}
    </>
  )
}

export default Landing