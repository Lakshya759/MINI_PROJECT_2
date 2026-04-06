import React from 'react'
import "./LandingFooter.css"
const LandingFooter = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-brand">

          <div className="footer-logo">
            <div className="logo-icon">📄</div>
            <span>ShareSphere</span>
          </div>

          <p className="footer-desc">
            Empowering students worldwide to share knowledge and achieve
            academic excellence together.
          </p>


        </div>


        {/* Product */}
        <div className="footer-links">
          <h4>Product</h4>
          <a href="#">Features</a>
          <a href="#">How it Works</a>
          <a href="#">FAQ</a>
        </div>


        {/* Company */}
        


        {/* Legal */}
        
      </div>


      <div className="footer-bottom">
        © 2026 ShareSphere .All rights reserved.
      </div>

    </footer>
  )
}

export default LandingFooter