import React from "react";
import "./Features.css";
const Features = () => {
  return (
    <section class="features" id="Features">
      <div class="features-header">
        <h2>
          Everything You Need to <span>Manage Notes</span>
        </h2>
        <p>
          Powerful features designed to make sharing and accessing study
          materials seamless and efficient.
        </p>
      </div>

      <div class="features-grid">
        <div class="feature-card">
          <div class="icon blue">↑</div>
          <h3>Easy Upload</h3>
          <p>
            Drag and drop your PDF notes or select files from your device.
            Support for multiple files at once.
          </p>
        </div>

        <div class="feature-card">
          <div class="icon purple">↓</div>
          <h3>Quick Download</h3>
          <p>
            Access and download notes instantly. All files are optimized for
            fast downloading and viewing.
          </p>
        </div>

        {/* <div class="feature-card">
          <div class="icon green">📁</div>
          <h3>Smart Organization</h3>
          <p>
            Organize notes by subject, topic, or course. Create collections and
            manage your library effortlessly.
          </p>
        </div> */}

        <div class="feature-card">
          <div class="icon orange">🔍</div>
          <h3>Powerful Search</h3>
          <p>
            Find exactly what you need with advanced search filters. Search by
            title, subject, or keywords.
          </p>
        </div>

        {/* <div class="feature-card">
          <div class="icon red">🛡</div>
          <h3>Secure Storage</h3>
          <p>
            Your notes are stored securely with enterprise-grade encryption.
            Access them anytime, anywhere.
          </p>
        </div> */}

        <div class="feature-card">
          <div class="icon teal">👥</div>
          <h3>Community Driven</h3>
          <p>
            Join a growing community of learners. Share knowledge and help
            others succeed in their studies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
