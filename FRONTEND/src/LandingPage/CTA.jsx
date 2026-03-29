import React from 'react'
import "./CTA.css"
const CTA = () => {
  return (
    <section className="cta" id="CTA">

      <div className="cta-container">

        <h2 className="cta-title">
          Ready to Transform Your Study Experience?
        </h2>

        <p className="cta-text">
          Join thousands of students who are already sharing knowledge and
          achieving academic success together.
        </p>

        <div className="cta-buttons">
          <button className="cta-primary">
            Get Started Free →
          </button>

          <button className="cta-secondary">
            Browse Notes
          </button>
        </div>

        <p className="cta-note">
          No credit card required • Free forever • Cancel anytime
        </p>

      </div>

    </section>
  )
}

export default CTA