
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import CaseCard from '../components/CaseCard'
import Hero from '../components/Hero'
import FlipCard from '../components/FlipCard'
import ImageSlider from '../components/ImageSlider'
import ScrollOverlappingText from '../components/RotatingText'
import ScrollOverlappingSections from '../components/ScrollSection'
import SunflowerEffect from '../components/ScatterEffectSection'
import AboutUs from '../components/About'
import FAQ from '../components/Faq'

function Landing() {
  return (
    <>
    <Nav/>
    <Hero/>
    <ImageSlider/>
    <ScrollOverlappingText/>
    <FlipCard/>
    <ScrollOverlappingSections/>
    <CaseCard/>
    <SunflowerEffect/>
    <AboutUs/>
    <FAQ/>
    <Footer/>
    </>
  )
}

export default Landing