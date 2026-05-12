import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Background from './components/Background.jsx'
import ValueProps from './components/ValueProps.jsx'
import Features from './components/Features.jsx'
import Accessibility from './components/Accessibility.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Background />
        <ValueProps />
        <Features />
        <Accessibility />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
