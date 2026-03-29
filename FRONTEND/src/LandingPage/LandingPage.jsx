import { Link } from "react-router-dom";
import Hero from "./Hero.jsx";
import Features from "./Features.jsx";
import HowItWorks from "./HowItWorks.jsx";
import CTA from "./CTA.jsx";
import LandingNav from "./LandingNav.jsx";
import LandingFooter from "./LandingFooter.jsx";
import React from 'react'

const LandingPage = () => {
  return (
    <>
    <LandingNav/>
    <Hero/>
    <Features/>
    <HowItWorks/>
    {/* <CTA/> */}
    <LandingFooter/>
    
    </>
  )
}

export default LandingPage