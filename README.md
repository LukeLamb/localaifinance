# Local AI Finance Website

A professional full-stack website for Local AI Finance - a privacy-first financial AI assistant.

## 🚀 Tech Stack

- **Frontend**: React 18 with React Router
- **Backend**: Node.js + Express
- **Deployment**: Azure App Service
- **CI/CD**: GitHub Actions

## 📁 Project Structure

```bash
localaifinance/
├── client/                 # React frontend
│   ├── public/            # Static files
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── App.js         # Main app component
│   │   └── index.js       # Entry point
│   └── package.json
├── server.js              # Express backend
├── package.json           # Backend dependencies
├── .github/workflows/     # GitHub Actions
└── README.md
```

## 🛠️ Local Development

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**

```bash
   git clone https://github.com/LukeLamb/localaifinance.git
   cd localaifinance
   ```

2. **Install dependencies**

   ```bash
   # Install backend dependencies
   npm install

   # Install frontend dependencies
   cd client
   npm install
   cd ..
   ```

3. **Run in development mode**

   Open two terminal windows:

   **Terminal 1 - Backend:**

   ```bash
   npm run dev
   ```

   **Terminal 2 - Frontend:**

   ```bash
   cd client
   npm start
   ```

4. **Access the application**

   - Frontend: <http://localhost:3000>
   - Backend API: <http://localhost:8080>

## 🏗️ Building for Production

```bash
# Build the React frontend
npm run build

# Start the production server
npm start
```

The production build serves the React app from Express at <http://localhost:8080>

### Azure Setup

1. **Create Azure App Service**

   ```bash
   # Login to Azure
   az login
   ```bash
   # Login to Azure
   az login

   # Create resource group
   az group create --name localaifinance-rg --location eastus

   # Create App Service plan
   az appservice plan create \
     --name localaifinance-plan \
     --resource-group localaifinance-rg \
     --sku B1 \
     --is-linux

     --name localaifinance \
     --runtime "NODE|18-lts"
   ```

2. **Configure Environment Variables**

   ```bash
   az webapp config appsettings set \
     --name localaifinance \
     --settings NODE_ENV=production PORT=8080
   ```

3. **Get Publish Profile**

   ```bash
   az webapp deployment list-publishing-profiles \
     --resource-group localaifinance-rg \
     --xml
   ```

4. **Add to GitHub Secrets**

   - Go to your GitHub repository
     --resource-group localaifinance-rg \
     --xml

   ```

### Custom Domain Setup

1. **Add custom domain in Azure**

   ```bash
   az webapp config hostname add \
     --resource-group localaifinance-rg \
     --hostname localaifinance.com
   ```

2. **Configure DNS**

   Add these records to your domain registrar:
   az webapp config hostname add \
     --webapp-name localaifinance \
     --resource-group localaifinance-rg \
     --hostname localaifinance.com

   ```

2. **Configure DNS**
   Add these records to your domain registrar:
   - **A Record**: Point to your Azure App IP

   ```

   Or use Azure's managed certificate (free):

   - Go to Azure Portal
   az webapp config ssl bind \
     --certificate-thumbprint <thumbprint> \

## 🔄 CI/CD Pipeline

The GitHub Actions workflow automatically:

1. Triggers on push to `main` branch

   Or use Azure's managed certificate (free):
   - Go to Azure Portal
   - Your App Service → TLS/SSL settings
   - Private Key Certificates (.pfx) → Create App Service Managed Certificate

## 🔄 CI/CD Pipeline

The GitHub Actions workflow automatically:

1. Triggers on push to `main` branch
2. Installs dependencies
3. Builds React frontend
4. Deploys to Azure App Service
5. Runs health check

### Manual Deployment Trigger

Go to Actions tab → Deploy to Azure App Service → Run workflow

## 📝 Environment Variables

Create a `.env` file in the root directory:

```env
PORT=8080
NODE_ENV=production
```

## 🧪 Testing

```bash
# Run backend tests
npm test

# Run frontend tests
cd client
npm test
```

## 📊 API Endpoints

- `GET /api/health` - Health check endpoint
- `GET /api/features` - Get feature list
- `POST /api/contact` - Submit contact form
- `GET /*` - Serves React app for all other routes

## 🔧 Troubleshooting

### Build Fails

- Check Node.js version (must be 18+)
- Clear `node_modules`: `rm -rf node_modules client/node_modules`
- Reinstall: `npm run install:all`

### Azure Deployment Issues

- Check Azure App Service logs: `az webapp log tail --name localaifinance --resource-group localaifinance-rg`
- Verify publish profile is correct
- Ensure environment variables are set

### Custom Domain Not Working

- Wait for DNS propagation (can take 24-48 hours)
- Verify DNS records with: `nslookup localaifinance.com`
- Check Azure App Service → Custom domains

## 📚 Additional Resources

- [Azure App Service Docs](https://docs.microsoft.com/en-us/azure/app-service/)
- [React Documentation](https://react.dev/)
- [Express.js Guide](https://expressjs.com/)
- [GitHub Actions](https://docs.github.com/en/actions)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📧 Contact

- Website: [localaifinance.com](https://localaifinance.com)
- Email: <info@localaifinance.com>
- GitHub: [@LukeLamb](https://github.com/LukeLamb)

---

Built with ❤️ for privacy-conscious financial enthusiasts
