import { Navigate, useParams } from 'react-router-dom'
import { getFeatureBySlug } from '../data/features.js'
import FeatureDetailLayout from '../components/FeatureDetailLayout.jsx'

export default function FeaturePage() {
  const { slug } = useParams()
  const feature = getFeatureBySlug(slug)

  if (!feature) {
    return <Navigate to="/" replace />
  }

  return <FeatureDetailLayout feature={feature} />
}
