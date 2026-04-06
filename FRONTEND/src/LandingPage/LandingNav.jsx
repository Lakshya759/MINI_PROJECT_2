import React from 'react'
import { Link } from 'react-router-dom'
import "./LandingNav.css"
const LandingNav = () => {
  return (
    <nav className="navbar">

      <div className="nav-container">

        <div className="logo">
          <div className="logo-icon">📄</div>
          <span className="logo-text">ShareSphere</span>
        </div>

        <div className="nav-links">
          <a href="#Features">Features</a>
          <a href="#HowItWorks">How it Works</a>
        </div>

        <div className="nav-actions">
          <Link to="/login" className="signin">Sign In</Link>
          <Link to="/login"><button className="get-started">Get Started</button></Link>
        </div>

      </div>

    </nav>
  )
}

export default LandingNav