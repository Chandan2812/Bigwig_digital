
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import CaseCard from '../components/CaseCard'
import Hero from '../components/Hero'
import FlipCard from '../components/FlipCard'
import ImageSlider from '../components/ImageSlider'
import ScrollSections from '../components/ScrollSection'
import ScrollOverlappingText from '../components/RotatingText'

function Landing() {
  return (
    <>
    <Nav/>
    <Hero/>
    <ImageSlider/>
    <ScrollOverlappingText/>
    <FlipCard/>
    <ScrollSections/>
    <CaseCard/>
    <Footer/>
    </>
  )
}

export default Landing