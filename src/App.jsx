import About from './components/About'
import BackToTop from './components/BackToTop'
import Contact from './components/Contact'
import CursorGlow from './components/CursorGlow'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import ScrollProgress from './components/ScrollProgress'
import Services from './components/Services'
import Skills from './components/Skills'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-bg">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
