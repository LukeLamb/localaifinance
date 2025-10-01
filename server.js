const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(helmet({
  contentSecurityPolicy: false, // Allow inline scripts for now
}));
app.use(compression());
app.use(morgan('combined'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    service: 'LocalAIFinance API'
  });
});

app.get('/api/features', (req, res) => {
  res.json({
    features: [
      {
        id: 1,
        title: 'Privacy First',
        description: 'Your financial data never leaves your device',
        icon: '🔒'
      },
      {
        id: 2,
        title: 'AI-Powered Analysis',
        description: 'Advanced local AI for financial insights',
        icon: '🤖'
      },
      {
        id: 3,
        title: 'Real-Time Processing',
        description: 'Instant analysis and recommendations',
        icon: '⚡'
      },
      {
        id: 4,
        title: 'No Subscriptions',
        description: 'One-time purchase, lifetime access',
        icon: '💰'
      }
    ]
  });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // Log contact form submission (in production, send email or save to DB)
  console.log('Contact form submission:', { name, email, message });
  
  res.json({ 
    success: true, 
    message: 'Thank you for your message. We will get back to you soon!' 
  });
});

// Serve static files from React build
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Catch-all handler - send back React's index.html for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`📍 Local: http://localhost:${PORT}`);
});
