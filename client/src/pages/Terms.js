import React from 'react';
import './Privacy.css';

function Terms() {
  return (
    <div className="legal-page">
      <div className="legal-hero section">
        <div className="container text-center">
          <h1>Terms of Service</h1>
          <p className="text-secondary">Last updated: October 1, 2025</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="legal-content">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using Local AI Finance ("the Application"), you agree to be 
              bound by these Terms of Service. If you disagree with any part of these terms, 
              you may not use our Application.
            </p>

            <h2>License</h2>
            <p>
              Local AI Finance grants you a personal, non-transferable, non-exclusive 
              license to use the Application for your personal or business financial 
              analysis purposes.
            </p>
            <p>You may:</p>
            <ul>
              <li>Install and use the Application on devices you own or control</li>
              <li>Use the Application for personal and commercial purposes</li>
              <li>Create backups of your data</li>
            </ul>
            <p>You may not:</p>
            <ul>
              <li>Reverse engineer, decompile, or disassemble the Application</li>
              <li>Distribute, sublicense, or sell the Application</li>
              <li>Use the Application for illegal purposes</li>
              <li>Remove copyright or proprietary notices</li>
            </ul>

            <h2>Privacy and Data</h2>
            <p>
              The Application processes all data locally on your device. We do not collect, 
              store, or transmit your financial data. You are solely responsible for:
            </p>
            <ul>
              <li>Maintaining the security of your device</li>
              <li>Backing up your data</li>
              <li>Protecting access to the Application</li>
            </ul>

            <h2>Disclaimer of Warranties</h2>
            <p>
              THE APPLICATION IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. WE DO NOT 
              WARRANT THAT THE APPLICATION WILL BE ERROR-FREE OR UNINTERRUPTED.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              LOCAL AI FINANCE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, 
              CONSEQUENTIAL, OR PUNITIVE DAMAGES RESULTING FROM YOUR USE OF THE APPLICATION.
            </p>

            <h2>Financial Advice Disclaimer</h2>
            <p>
              The Application provides information and analysis tools. It does not provide 
              financial advice. You should:
            </p>
            <ul>
              <li>Consult with qualified financial advisors for personalized advice</li>
              <li>Verify all information independently</li>
              <li>Understand that past performance does not guarantee future results</li>
              <li>Make your own informed decisions</li>
            </ul>

            <h2>Updates and Modifications</h2>
            <p>
              We reserve the right to modify the Application and these Terms at any time. 
              Continued use of the Application after changes constitutes acceptance of 
              the new Terms.
            </p>

            <h2>Termination</h2>
            <p>
              You may stop using the Application at any time by uninstalling it from your 
              device. We reserve the right to terminate or suspend access to the Application 
              for violations of these Terms.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with applicable 
              laws, without regard to conflict of law provisions.
            </p>

            <h2>Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact:
            </p>
            <p>
              <strong>Email:</strong> legal@localaifinance.com<br />
              <strong>Website:</strong> localaifinance.com
            </p>

            <h2>Entire Agreement</h2>
            <p>
              These Terms constitute the entire agreement between you and Local AI Finance 
              regarding the use of the Application.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Terms;
