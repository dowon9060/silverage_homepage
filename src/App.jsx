import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ScrollToHash from './components/ScrollToHash.jsx'
import HomePage from './pages/HomePage.jsx'
import FeaturePage from './pages/FeaturePage.jsx'
import AccessibilityPage from './pages/AccessibilityPage.jsx'

export default function App() {
  return (
    <>
      <Header />
      <ScrollToHash />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features/:slug" element={<FeaturePage />} />
          <Route path="/accessibility" element={<AccessibilityPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
