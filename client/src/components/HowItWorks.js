import React from 'react';
import './HowItWorks.css';

function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Download & Install',
      description: 'Get the application and install it on your Windows, Mac, or Linux computer',
      icon: '⬇️'
    },
    {
      number: '2',
      title: 'Connect Your Data',
      description: 'Import your financial data securely. Everything stays on your device',
      icon: '🔗'
    },
    {
      number: '3',
      title: 'AI Analysis',
      description: 'Let our local AI analyze your finances and provide personalized insights',
      icon: '🧠'
    },
    {
      number: '4',
      title: 'Take Action',
      description: 'Make informed decisions based on AI-powered recommendations',
      icon: '🚀'
    }
  ];

  return (
    <section id="how-it-works" className="section section-dark how-it-works">
      <div className="container">
        <div className="section-header text-center">
          <h2>How It Works</h2>
          <p>Get started with Local AI Finance in just four simple steps</p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={step.number} className="step-item fade-in">
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>

        <div className="how-it-works-cta text-center">
          <a href="#download" className="btn btn-primary btn-large">
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
