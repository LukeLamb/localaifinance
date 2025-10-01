import React from 'react';
import './Privacy.css';

function Privacy() {
  return (
    <div className="legal-page">
      <div className="legal-hero section">
        <div className="container text-center">
          <h1>Privacy Policy</h1>
          <p className="text-secondary">Last updated: October 1, 2025</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="legal-content">
            <h2>Our Commitment to Privacy</h2>
            <p>
              At Local AI Finance, privacy isn't just a feature – it's our foundation. 
              Unlike traditional financial software, our application processes everything 
              locally on your device. This means:
            </p>
            <ul>
              <li>Your financial data never leaves your computer</li>
              <li>We don't have servers storing your information</li>
              <li>No third parties can access your data</li>
              <li>You maintain complete control over your information</li>
            </ul>

            <h2>Information We Collect</h2>
            <h3>Website Usage</h3>
            <p>
              When you visit our website (localaifinance.com), we may collect:
            </p>
            <ul>
              <li>Anonymous analytics data (page views, browser type)</li>
              <li>Contact information you voluntarily provide</li>
              <li>Download statistics (anonymous)</li>
            </ul>

            <h3>Application Usage</h3>
            <p>
              The Local AI Finance application operates entirely offline. We do not collect:
            </p>
            <ul>
              <li>Your financial data</li>
              <li>Transaction information</li>
              <li>Personal identifiable information</li>
              <li>Usage analytics from the application</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>
              Website information is used solely for:
            </p>
            <ul>
              <li>Responding to your inquiries</li>
              <li>Improving our website experience</li>
              <li>Sending product updates (only if you opt-in)</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              Since your financial data never leaves your device, it's protected by 
              your own security measures. We recommend:
            </p>
            <ul>
              <li>Using strong device passwords</li>
              <li>Keeping your operating system updated</li>
              <li>Regular backups of your local data</li>
              <li>Enabling disk encryption</li>
            </ul>

            <h2>Third-Party Services</h2>
            <p>
              Our website may use third-party services for:
            </p>
            <ul>
              <li>Website hosting</li>
              <li>Anonymous analytics</li>
              <li>Email communications</li>
            </ul>
            <p>
              These services never have access to data within the Local AI Finance application.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access any data we have collected through the website</li>
              <li>Request deletion of your website contact information</li>
              <li>Opt-out of marketing communications</li>
              <li>Complete control of all application data on your device</li>
            </ul>

            <h2>Updates to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you 
              of any significant changes via our website and through application updates.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> privacy@localaifinance.com<br />
              <strong>Website:</strong> localaifinance.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Privacy;
