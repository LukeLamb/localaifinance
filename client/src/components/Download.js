import React from 'react';
import './Download.css';

function Download() {
  const handleDownload = (platform) => {
    // In production, this would trigger actual download
    console.log(`Downloading for ${platform}`);
    alert(`Download for ${platform} will start soon. Coming soon!`);
  };

  return (
    <section id="download" className="section download-section">
      <div className="container">
        <div className="section-header text-center">
          <h2>Download Local AI Finance</h2>
          <p className="text-secondary">
            Available for Windows, macOS, and Linux. Choose your platform below.
          </p>
        </div>

        <div className="download-cards grid grid-3">
          <div className="card download-card">
            <div className="platform-icon">🪟</div>
            <h3>Windows</h3>
            <p className="version-info">Version 1.0.0</p>
            <p className="requirements">Windows 10/11 (64-bit)</p>
            <button 
              onClick={() => handleDownload('Windows')} 
              className="btn btn-primary"
            >
              Download for Windows
            </button>
          </div>

          <div className="card download-card featured">
            <div className="featured-badge">Most Popular</div>
            <div className="platform-icon">🍎</div>
            <h3>macOS</h3>
            <p className="version-info">Version 1.0.0</p>
            <p className="requirements">macOS 11.0 or later</p>
            <button 
              onClick={() => handleDownload('macOS')} 
              className="btn btn-primary"
            >
              Download for macOS
            </button>
          </div>

          <div className="card download-card">
            <div className="platform-icon">🐧</div>
            <h3>Linux</h3>
            <p className="version-info">Version 1.0.0</p>
            <p className="requirements">Ubuntu 20.04+, Debian, Fedora</p>
            <button 
              onClick={() => handleDownload('Linux')} 
              className="btn btn-primary"
            >
              Download for Linux
            </button>
          </div>
        </div>

        <div className="download-info text-center">
          <p className="text-secondary">
            📦 File size: ~500MB | 🔒 SHA-256 checksum provided | ✅ Open source
          </p>
        </div>

        <div className="system-requirements card">
          <h3>System Requirements</h3>
          <div className="requirements-grid grid grid-2">
            <div>
              <h4>Minimum Requirements</h4>
              <ul>
                <li>4GB RAM</li>
                <li>2GB free disk space</li>
                <li>Dual-core processor</li>
                <li>Internet for initial download</li>
              </ul>
            </div>
            <div>
              <h4>Recommended Requirements</h4>
              <ul>
                <li>8GB+ RAM</li>
                <li>5GB free disk space</li>
                <li>Quad-core processor</li>
                <li>SSD for better performance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Download;
