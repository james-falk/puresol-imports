# 🔐 GitHub Secrets Setup Guide

## Required Secrets for Vercel Deployment

Your GitHub Actions workflow requires these secrets to be added to your repository:

### 1. Generate Vercel Token

1. **Go to Vercel Dashboard**: https://vercel.com/account/tokens
2. **Click "Create Token"**
3. **Token Details**:
   - **Name**: `GitHub Actions - PureSol Imports`
   - **Expiration**: `No expiration` (or set a long expiration)
   - **Scope**: Select all scopes for full access
4. **Copy the token** (you won't see it again!)

### 2. Add Secrets to GitHub Repository

1. **Go to your repository**: https://github.com/james-falk/puresol-imports
2. **Navigate to Settings**:
   - Click the **Settings** tab
   - In the left sidebar, click **Secrets and variables**
   - Click **Actions**
3. **Add each secret**:

#### Secret 1: `VERCEL_TOKEN`
- **Name**: `VERCEL_TOKEN`
- **Value**: Paste the token you copied from Vercel
- **Click "Add secret"**

#### Secret 2: `VERCEL_ORG_ID`
- **Name**: `VERCEL_ORG_ID`
- **Value**: `james-projects-cf25d43f`
- **Click "Add secret"**

#### Secret 3: `VERCEL_PROJECT_ID`
- **Name**: `VERCEL_PROJECT_ID`
- **Value**: `prj_enIBFu0pJKVkpF5vT0U9QPPnUsmQ`
- **Click "Add secret"**

### 3. Verify Secrets

After adding all secrets, you should see:
- ✅ `VERCEL_TOKEN` (hidden)
- ✅ `VERCEL_ORG_ID` (hidden)
- ✅ `VERCEL_PROJECT_ID` (hidden)

### 4. Test the Deployment

1. **Make a small change** to any file
2. **Commit and push** to trigger the workflow
3. **Check the Actions tab** in your GitHub repository
4. **Monitor the deployment** in your Vercel dashboard

## Troubleshooting

### If the workflow still fails:

1. **Check secret names**: Make sure they match exactly (case-sensitive)
2. **Verify token permissions**: Ensure the Vercel token has the right scopes
3. **Check project linking**: Verify the project is properly linked in Vercel

### Manual Deployment Test

If you want to test deployment manually first:

```bash
# In your local project directory
npx vercel --prod
```

## Current Status

- ✅ **GitHub Actions Workflow**: Configured
- ✅ **Vercel Project**: Linked (`puresol-imports`)
- ⏳ **GitHub Secrets**: Need to be added (see steps above)
- ⏳ **Automatic Deployment**: Will work once secrets are added

Once you add these secrets, every push to the `master` branch will automatically deploy to Vercel! 🚀
