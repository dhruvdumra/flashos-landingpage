import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import OSCatalog from './components/OSCatalog'
import Download from './components/Download'
import Donate from './components/Donate'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <HowItWorks />
        <OSCatalog />
        <Download />
        <Donate />
      </main>
      <Footer />
    </>
  )
}
