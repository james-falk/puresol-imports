# 🚀 Deployment Setup Guide

## Vercel Configuration

Your PureSol Imports website is now configured for automatic deployment to Vercel via GitHub Actions.

### Project Information
- **Project Name**: `puresol-imports`
- **Production URL**: https://puresol-imports.vercel.app
- **Organization ID**: `james-projects-cf25d43f`
- **Project ID**: `prj_enIBFu0pJKVkpF5vT0U9QPPnUsmQ`

### GitHub Secrets Required

To enable automatic deployment, you need to add these secrets to your GitHub repository:

1. Go to your GitHub repository: https://github.com/james-falk/puresol-imports
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Add the following secrets:

#### `VERCEL_TOKEN`
- Generate a Vercel token at: https://vercel.com/account/tokens
- Click "Create Token"
- Give it a name like "GitHub Actions"
- Copy the token and add it as `VERCEL_TOKEN`

#### `VERCEL_ORG_ID`
- Value: `james-projects-cf25d43f`

#### `VERCEL_PROJECT_ID`
- Value: `prj_enIBFu0pJKVkpF5vT0U9QPPnUsmQ`

### How It Works

1. **Automatic Deployment**: Every push to the `master` branch triggers a deployment
2. **Quality Checks**: The workflow runs linting, type checking, and builds the project
3. **Production Ready**: Only successful builds are deployed to production
4. **Preview Deployments**: Pull requests get preview deployments for testing

### Manual Deployment

If you need to deploy manually:
```bash
# Deploy to preview
npx vercel

# Deploy to production
npx vercel --prod
```

### Current Status

✅ **Project Linked**: Successfully linked to Vercel  
✅ **GitHub Actions**: Workflow configured  
⏳ **Secrets Setup**: Add the secrets above to enable automatic deployment  

Once the secrets are added, every push to GitHub will automatically deploy to Vercel!
