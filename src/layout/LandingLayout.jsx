import React from 'react'
import HeroSection from '../pages/landingPage/Hero'
import AboutSection from '../pages/landingPage/InfoPage'
import WasteManagementSection from '../pages/landingPage/WasteSection'
import TrashCanPlacement from '../pages/customerDashboard/TrashCanPickup'
const LandingLayout = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <WasteManagementSection />
      <TrashCanPlacement />
    </div>
  )
}

export default LandingLayout
