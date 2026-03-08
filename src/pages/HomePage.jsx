import React from 'react'
import HeroSection from '../components/HeroSection'
import ServiceSection from '../components/ServiceSection'
import HowItWorks from '../components/HowItWorks'
import Footer from '../components/Footer'


export default function HomePage() {
  return (
    <div>
      <HeroSection/>
      <ServiceSection/>
      <HowItWorks/>
      <Footer/>
    </div>
  )
}
