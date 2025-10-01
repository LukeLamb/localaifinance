import React from 'react';
import './Hero.css';

function Hero() {
  const scrollToDownload = () => {
    document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text fade-in">
            <h1 className="hero-title">
              Your Financial AI Assistant
              <br />
              <span className="text-primary">That Stays Private</span>
            </h1>
            <p className="hero-subtitle">
              Powerful AI-driven financial analysis that runs entirely on your device. 
              No cloud, no subscriptions, no data sharing. Your financial data never leaves your computer.
            </p>
            <div className="hero-buttons">
              <button onClick={scrollToDownload} className="btn btn-primary btn-large">
                Download Now
              </button>
              <a href="#features" className="btn btn-secondary btn-large">
                Learn More
              </a>
            </div>
            <div className="hero-features">
              <div className="hero-feature-item">
                <span className="feature-icon">🔒</span>
                <span>100% Private</span>
              </div>
              <div className="hero-feature-item">
                <span className="feature-icon">💻</span>
                <span>Runs Locally</span>
              </div>
              <div className="hero-feature-item">
                <span className="feature-icon">⚡</span>
                <span>Lightning Fast</span>
              </div>
            </div>
          </div>
          <div className="hero-image fade-in">
            <div className="hero-graphic">
              <div className="graphic-card card-1">
                <div className="card-icon">📊</div>
                <div className="card-text">Real-time Analysis</div>
              </div>
              <div className="graphic-card card-2">
                <div className="card-icon">🤖</div>
                <div className="card-text">AI Insights</div>
              </div>
              <div className="graphic-card card-3">
                <div className="card-icon">🔐</div>
                <div className="card-text">Secure & Private</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
