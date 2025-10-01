# Quick Start Guide

## 🚀 Get Your Website Live in 30 Minutes

Follow these steps in order for the fastest deployment.

## Step 1: Install Dependencies (5 minutes)

Open PowerShell in the project directory:

```powershell
cd C:\Users\infob\Desktop\Agents\website

# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
cd ..
```

## Step 2: Test Locally (5 minutes)

Open **two PowerShell windows**:

**Window 1 - Start Backend:**

```powershell
cd C:\Users\infob\Desktop\Agents\website
npm run dev
```

**Window 2 - Start Frontend:**

```powershell
cd C:\Users\infob\Desktop\Agents\website\client
npm start
```

Your browser should open automatically to `http://localhost:3000`

✅ Test that everything works:

- Home page loads
- Click through all sections
- Submit contact form
- Check blog page

Press `Ctrl+C` in both windows when done testing.

## Step 3: Push to GitHub (2 minutes)

```powershell
cd C:\Users\infob\Desktop\Agents\website

git init
git add .
git commit -m "Initial commit: Local AI Finance website"
git branch -M main
git remote add origin https://github.com/LukeLamb/localaifinance.git
git push -u origin main
```

## Step 4: Create Azure App Service (10 minutes)

### Option A: Using Azure Portal (Easiest)

1. Go to <https://portal.azure.com>
2. Click "+ Create a resource" → "Web App"
3. Fill in:
   - **Resource Group**: Create new → `localaifinance-rg`
   - **Name**: `localaifinance`
   - **Runtime stack**: `Node 18 LTS`
   - **Operating System**: `Linux`
   - **Pricing**: `Basic B1` or `Free F1` (for testing)
4. Click "Review + Create" → "Create"

### Option B: Using Azure CLI (Faster for experts)

```powershell
# Login
az login

# Create everything at once
az group create --name localaifinance-rg --location eastus

az appservice plan create `
  --name localaifinance-plan `
  --resource-group localaifinance-rg `
  --sku B1 `
  --is-linux

az webapp create `
  --resource-group localaifinance-rg `
  --plan localaifinance-plan `
  --name localaifinance `
  --runtime "NODE|18-lts"

# Set environment variables
az webapp config appsettings set `
  --resource-group localaifinance-rg `
  --name localaifinance `
  --settings NODE_ENV=production PORT=8080
```

## Step 5: Set Up Auto-Deployment (8 minutes)

1. **Download Publish Profile**
   - Azure Portal → Your Web App
   - Deployment Center → Manage publish profile
   - Download the XML file

2. **Add to GitHub Secrets**
   - Go to <https://github.com/LukeLamb/localaifinance>
   - Settings → Secrets and variables → Actions
   - New repository secret:
     - Name: `AZURE_WEBAPP_PUBLISH_PROFILE`
     - Value: Paste the entire XML content
   - Save

3. **Trigger Deployment**

   ```powershell
   # Make a small change to trigger deployment
   git commit --allow-empty -m "Trigger initial deployment"
   git push origin main
   ```

4. **Watch It Deploy**
   - GitHub → Your repo → Actions tab
   - Watch the deployment progress (takes 3-5 minutes)

## Step 6: Verify It's Live! (1 minute)

Open in browser:

```bash
https://localaifinance.azurewebsites.net
```

You should see your website! 🎉

Test the health endpoint:

```bash
https://localaifinance.azurewebsites.net/api/health
```

## ⏭️ Next Steps

### Now: Custom Domain Setup

See `AZURE-DEPLOYMENT-GUIDE.md` → Part 2 for:

1. Configuring DNS at Namecheap
2. Adding custom domain to Azure
3. Enabling free SSL certificate

This takes about 30-60 minutes (mostly waiting for DNS).

### Later: Improvements

- [ ] Add real download links
- [ ] Connect contact form to email
- [ ] Add blog posts
- [ ] Set up monitoring
- [ ] Configure backups

## 📝 Common Commands

```powershell
# Run locally (development)
npm run dev                    # Backend
cd client && npm start         # Frontend

# Build for production
npm run build                  # Builds React app

# Deploy to production
git add .
git commit -m "Your changes"
git push origin main          # Auto-deploys via GitHub Actions!

# View Azure logs
az webapp log tail --name localaifinance --resource-group localaifinance-rg
```

## ⚡ Quick Troubleshooting

**Local dev not working?**

```powershell
# Clear and reinstall
rm -r node_modules, client/node_modules
npm install
cd client && npm install
```

**Deployment failed?**

- Check GitHub Actions logs
- Verify publish profile secret is correct
- Ensure Node version is 18.x

**Website not loading?**

- Wait 2-3 minutes after deployment
- Check Azure → App Service → Log stream
- Verify environment variables are set

## 🎯 Success Checklist

After completing these steps, you should have:

✅ Website running locally
✅ Code pushed to GitHub
✅ Azure App Service created
✅ Automatic deployments configured
✅ Website live at `https://localaifinance.azurewebsites.net`

## 📞 Need Help?

- Check `README.md` for detailed documentation
- See `AZURE-DEPLOYMENT-GUIDE.md` for step-by-step Azure setup
- Check Azure logs for error messages
- Review GitHub Actions logs for deployment issues

---

**Congratulations!** 🎉 Your professional website is now live with automatic deployments!
