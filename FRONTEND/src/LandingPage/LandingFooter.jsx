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
            <span>NotesHub</span>
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
        <div className="footer-links">
          <h4>Company</h4>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </div>


        {/* Legal */}
        <div className="footer-links">
          <h4>Legal</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Licenses</a>
        </div>

      </div>


      <div className="footer-bottom">
        © 2026 NotesHub. All rights reserved.
      </div>

    </footer>
  )
}

export default LandingFooter