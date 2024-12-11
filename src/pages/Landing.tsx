
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import CaseCard from '../components/CaseCard'
import Hero from '../components/Hero'
import FlipCard from '../components/FlipCard'
import ImageSlider from '../components/ImageSlider'
import ScrollOverlappingText from '../components/RotatingText'
import ScrollOverlappingSections from '../components/ScrollSection'

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
    <Footer/>
    </>
  )
}

export default Landing