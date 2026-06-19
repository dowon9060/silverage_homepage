import Hero from '../components/Hero.jsx'
import Background from '../components/Background.jsx'
import ValueProps from '../components/ValueProps.jsx'
import FeatureMenu from '../components/FeatureMenu.jsx'
import AccessibilityPreview from '../components/AccessibilityPreview.jsx'
import CTA from '../components/CTA.jsx'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Background />
      <ValueProps />
      <FeatureMenu />
      <AccessibilityPreview />
      <CTA anchorId="cta" />
    </>
  )
}
