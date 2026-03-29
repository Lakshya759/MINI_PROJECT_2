import React from 'react'
import "./HowItWorks.css"
const HowItWorks = () => {
  return (
    <section className="how" id="HowItWorks">

      <div className="how-header">
        <h2>
          How It <span>Works</span>
        </h2>

        <p>
          Get started in three simple steps and join thousands of students
          sharing knowledge.
        </p>
      </div>


      <div className="how-container">

        <div className="steps">

          <div className="step">
            <div className="step-icon">↑</div>

            <div>
              <span className="step-number">01</span>
              <h3>Upload Your Notes</h3>
              <p>
                Simply drag and drop your PDF files or browse to select them.
                Add titles, descriptions, and tags to make them discoverable.
              </p>
            </div>
          </div>


          <div className="step">
            <div className="step-icon">📄</div>

            <div>
              <span className="step-number">02</span>
              <h3>Organize & Categorize</h3>
              <p>
                Sort your notes into subjects and topics. Our smart system
                helps you keep everything perfectly organized.
              </p>
            </div>
          </div>


          <div className="step">
            <div className="step-icon">🔗</div>

            <div>
              <span className="step-number">03</span>
              <h3>Share & Download</h3>
              <p>
                Share your notes with the community or keep them private.
                Download notes from others and expand your knowledge base.
              </p>
            </div>
          </div>

        </div>


        <div className="how-image">
          <img src="Works.jpg" alt="workflow" />
        </div>

      </div>

    </section>
  )
}

export default HowItWorks