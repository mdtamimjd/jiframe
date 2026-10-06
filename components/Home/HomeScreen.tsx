import React from 'react'
import HeroSection from './HeroSection'
import ServiceSection from './ServiceSection'
import LocationSection from './LocationSection'
import WorkSection from './WorkSection'
import WhyUs from './WhyUs'
import FAQSection from './FAQSection'

export default function HomeScreen() {
  return (
    <div>
      <HeroSection/>
      <ServiceSection/>
      <LocationSection/>
      <WorkSection/>
      <WhyUs/>
      <FAQSection/>
    </div>
  )
}
