import React, { useState, useEffect } from 'react';
import './Features.css';

function Features() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    // Fetch features from API
    fetch('/api/features')
      .then(res => res.json())
      .then(data => setFeatures(data.features))
      .catch(err => console.error('Error fetching features:', err));
  }, []);

  return (
    <section id="features" className="section features-section">
      <div className="container">
        <div className="section-header text-center">
          <h2>Why Choose Local AI Finance?</h2>
          <p className="text-secondary">
            Experience the perfect blend of powerful AI and absolute privacy
          </p>
        </div>

        <div className="grid grid-4">
          {features.map(feature => (
            <div key={feature.id} className="card feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p className="text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="features-extra">
          <div className="grid grid-3">
            <div className="card extra-feature">
              <h4>📈 Advanced Analytics</h4>
              <p>Comprehensive financial analysis with AI-powered insights and predictions</p>
            </div>
            <div className="card extra-feature">
              <h4>🌐 Works Offline</h4>
              <p>No internet required. Your data and analysis stay completely local</p>
            </div>
            <div className="card extra-feature">
              <h4>🔄 Regular Updates</h4>
              <p>Continuous improvements and new features delivered regularly</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
