# Azure Deployment Guide for Local AI Finance

This guide will walk you through deploying your website to Azure App Service step-by-step.

## Prerequisites

✅ Azure account (free tier available)
✅ GitHub account
✅ Domain name (localaifinance.com)
✅ Azure CLI installed (optional, but recommended)

## Part 1: Initial Setup (One-time)

### Step 1: Push Code to GitHub

```bash
cd C:\Users\infob\Desktop\Agents\website

# Initialize git repository
git init
git add .
git commit -m "Initial commit - Local AI Finance website"

# Add remote and push
git branch -M main
git remote add origin https://github.com/LukeLamb/localaifinance.git
git push -u origin main
```

### Step 2: Create Azure App Service (Web Portal Method)

1. **Go to Azure Portal**
   - Visit <https://portal.azure.com>
   - Sign in with your account

2. **Create Resource Group**
   - Click "+ Create a resource"
   - Search for "Resource Group"
   - Click "Create"
   - Settings:
     - Subscription: Your subscription
     - Resource group name: `localaifinance-rg`
     - Region: `East US` (or closest to you)
   - Click "Review + Create" → "Create"

3. **Create App Service Plan**
   - Click "+ Create a resource"
   - Search for "App Service Plan"
   - Click "Create"
   - Settings:
     - Resource Group: `localaifinance-rg`
     - Name: `localaifinance-plan`
     - Operating System: `Linux`
     - Region: `East US`
     - Pricing Tier: `Basic B1` (or Free F1 for testing)
   - Click "Review + Create" → "Create"

4. **Create Web App**
   - Click "+ Create a resource"
   - Search for "Web App"
   - Click "Create"
   - Settings:
     - Resource Group: `localaifinance-rg`
     - Name: `localaifinance` (this will be your subdomain)
     - Publish: `Code`
     - Runtime stack: `Node 18 LTS`
     - Operating System: `Linux`
     - Region: `East US`
     - App Service Plan: Select `localaifinance-plan`
   - Click "Review + Create" → "Create"

### Step 3: Configure App Service

1. **Set Environment Variables**
   - Go to your Web App in Azure Portal
   - Click "Configuration" in left menu
   - Under "Application settings", click "+ New application setting"
   - Add:
     - Name: `NODE_ENV`, Value: `production`
     - Name: `PORT`, Value: `8080`
   - Click "Save" at the top

2. **Enable Always On** (Recommended)
   - Still in Configuration
   - Go to "General settings" tab
   - Set "Always on" to `On`
   - Click "Save"

### Step 4: Set Up GitHub Actions Deployment

1. **Get Publish Profile**
   - In your Web App, click "Deployment Center" in left menu
   - Click "Manage publish profile" → "Download publish profile"
   - This downloads an XML file

2. **Add Secret to GitHub**
   - Go to your GitHub repository
   - Click "Settings" → "Secrets and variables" → "Actions"
   - Click "New repository secret"
   - Name: `AZURE_WEBAPP_PUBLISH_PROFILE`
   - Value: Paste the entire contents of the downloaded XML file
   - Click "Add secret"

3. **Update Workflow File**
   - The workflow file is already in `.github/workflows/azure-deploy.yml`
   - Make sure the `AZURE_WEBAPP_NAME` matches your app name (should be `localaifinance`)

### Step 5: Deploy

```bash
# Make sure all changes are committed
git add .
git commit -m "Configure Azure deployment"
git push origin main
```

Watch the deployment:

- Go to your GitHub repository
- Click "Actions" tab
- You'll see the deployment running
- Click on it to see detailed logs

## Part 2: Custom Domain Setup

### Step 1: Add Custom Domain to Azure

1. **In Azure Portal**
   - Go to your Web App
   - Click "Custom domains" in left menu
   - Click "+ Add custom domain"
   - Enter: `localaifinance.com`
   - Click "Validate"
   - Azure will show you DNS records to add

### Step 2: Configure DNS at Namecheap

1. **Login to Namecheap**
   - Go to Domain List
   - Click "Manage" next to localaifinance.com

2. **Update DNS Records**
   - Go to "Advanced DNS" tab
   - Add/Update these records:

   **For root domain (localaifinance.com):**

   ```bash
   Type: A Record
   Host: @
   Value: [Azure App IP from validation screen]
   TTL: Automatic
   ```

   ```bash
   Type: TXT Record
   Host: asuid
   Value: [Custom Domain Verification ID from Azure]
   TTL: Automatic
   ```

   **For www subdomain:**

   ```bash
   Type: CNAME Record
   Host: www
   Value: localaifinance.azurewebsites.net
   TTL: Automatic
   ```

3. **Wait for DNS Propagation**
   - Can take 5 minutes to 48 hours
   - Usually works within 30 minutes
   - Check status: <https://dnschecker.org>

### Step 3: Complete Azure Custom Domain Setup

1. **After DNS propagates**
   - Return to Azure Portal → Custom domains
   - Click "+ Add custom domain" again
   - Enter: `localaifinance.com`
   - Click "Validate" (should succeed now)
   - Click "Add custom domain"

2. **Add www subdomain**
   - Repeat for `www.localaifinance.com`

### Step 4: Enable Free SSL Certificate

1. **In Azure Portal**
   - Go to Web App → "Certificates"
   - Click "+ Add certificate"
   - Select "Create App Service Managed Certificate"
   - Select your domain: `localaifinance.com`
   - Click "Create"

2. **Bind Certificate**
   - Go to "Custom domains"
   - Click on your domain
   - Under "Secure custom domains"
   - Click "Add binding"
   - Select your certificate
   - Click "Add"

3. **Repeat for www**
   - Create and bind certificate for `www.localaifinance.com`

## Part 3: Verify Deployment

### Test Your Website

1. **Check Health Endpoint**

   ```bash
   https://localaifinance.com/api/health
   ```

   Should return: `{"status":"healthy",...}`

2. **Visit Website**

   ```bash
   https://localaifinance.com
   ```

3. **Test All Pages**
   - Home page
   - Features section
   - How It Works
   - Download section
   - Contact form
   - Blog page
   - Privacy Policy
   - Terms of Service

## Part 4: Ongoing Updates

### Making Changes

1. **Edit files locally**
2. **Test locally**

   ```bash
   npm run dev  # Terminal 1 - Backend
   cd client && npm start  # Terminal 2 - Frontend
   ```

3. **Commit and push**

   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```

4. **Automatic deployment happens via GitHub Actions!**

## Troubleshooting

### Deployment Failed

- Check GitHub Actions logs
- Verify Azure secrets are correct
- Ensure Node version matches (18.x)

### Website Not Loading

- Check Azure App Service logs:
  - Portal → Web App → Log stream
- Verify PORT is set to 8080 in environment variables

### Custom Domain Not Working

- Wait for DNS propagation
- Use <https://dnschecker.org> to verify DNS
- Check Azure Custom Domains for validation status

### SSL Certificate Issues

- Ensure DNS is fully propagated first
- Try creating certificate again after 24 hours
- Check that CNAME records are correct

## Monitoring and Logs

### View Application Logs

```bash
# Install Azure CLI
# Then run:
az webapp log tail --name localaifinance --resource-group localaifinance-rg
```

### Azure Portal Monitoring

- Go to Web App → Monitoring → Metrics
- Monitor:
  - Response time
  - Requests
  - Errors
  - CPU/Memory usage

## Cost Optimization

### Free/Low-Cost Options

1. **Free Tier** (F1)
   - Good for testing
   - 60 CPU minutes/day
   - 1 GB RAM
   - 1 GB storage

2. **Basic Tier** (B1) - Recommended
   - ~$13/month
   - 100 CPU minutes/day
   - 1.75 GB RAM
   - 10 GB storage
   - Custom domains + SSL

3. **Scale Down When Not Needed**
   - Portal → App Service Plan → Scale up/down

## Next Steps

✅ Set up monitoring and alerts
✅ Configure automated backups
✅ Add Application Insights for detailed analytics
✅ Set up staging environment
✅ Configure auto-scaling (if needed)

## Support

- Azure Support: <https://azure.microsoft.com/support/>
- Documentation: <https://docs.microsoft.com/azure/app-service/>

---

**You're all set!** Your website is now deployed professionally on Azure with automatic deployments from GitHub! 🚀
