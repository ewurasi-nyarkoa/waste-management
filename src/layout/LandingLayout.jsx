import React from 'react'
import HeroSection from '../pages/landingPage/Hero'
import AboutSection from '../pages/landingPage/InfoPage'
import WasteManagementSection from '../pages/landingPage/WasteSection'

const LandingLayout = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <WasteManagementSection />
    </div>
  )
}

export default LandingLayout
