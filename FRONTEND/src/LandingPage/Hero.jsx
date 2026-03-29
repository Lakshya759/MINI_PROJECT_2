import React from 'react'
import { Link } from 'react-router-dom'
import "./Hero.css"
const Hero = () => {
  return (
    <section className="hero" if="Hero">

      <div className="hero-left">

        <div className="badge">
          ⭐ Trusted by 50,000+ students worldwide
        </div>

        <h1>
          Share Your <span>Knowledge</span>, Elevate Your Learning
        </h1>

        <p>
          Upload, organize, and download PDF notes with ease. Join a
          community of learners sharing knowledge and accelerating success together.
        </p>

        <div className="buttons">
          <Link to="/login"><button className="primary">Start Sharing Notes →</button></Link>
          <button className="secondary">Browse Notes</button>
        </div>

        <div className="stats">

          <div>
            <strong>500K+</strong>
            <p>Notes Uploaded</p>
          </div>

          <div>
            <strong>2M+</strong>
            <p>Downloads</p>
          </div>

        </div>

      </div>


      <div className="hero-right">
        <img src="HeroImage.jpg" alt="study desk" />
      </div>

    </section>
  )
}

export default Hero