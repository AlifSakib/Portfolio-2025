# GitHub Pages Setup Instructions

## The 404 error occurs because GitHub Pages isn't enabled yet. Follow these steps:

### Step 1: Enable GitHub Pages
1. Go to your repository: `https://github.com/AlifSakib/Portfolio-2025`
2. Click on the **Settings** tab (top of the page)
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select **GitHub Actions** (NOT "Deploy from a branch")
5. Click **Save**

### Step 2: Trigger the Workflow
The workflow should automatically run when you enable GitHub Actions as the source. If not:

1. Go to the **Actions** tab in your repository
2. You should see the "Deploy to GitHub Pages" workflow
3. If it hasn't run yet, click **Run workflow** manually

### Step 3: Wait for Deployment
- The workflow takes 2-5 minutes to complete
- You can monitor progress in the Actions tab
- Once complete, your site will be available at: `https://alifsakib.github.io/Portfolio-2025/`

### Step 4: Verify Deployment
- Check the Actions tab for any errors
- The workflow should show green checkmarks
- The site URL will be shown in the deployment step

## Alternative: Manual Setup with gh-pages Branch

If the above doesn't work, we can use the traditional gh-pages branch method:

```bash
# Install gh-pages package
npm install --save-dev gh-pages

# Add to package.json scripts:
"deploy": "npm run build && gh-pages -d out"

# Run deployment
npm run deploy
```

## Troubleshooting

### If you see "There isn't a GitHub Pages site here":
1. Make sure GitHub Pages is enabled in Settings > Pages
2. Ensure the workflow completed successfully
3. Wait a few minutes after workflow completion
4. Try accessing the site in an incognito window

### If the workflow fails:
1. Check the Actions tab for error logs
2. Ensure your repository is public (or you have GitHub Pro for private repos)
3. Verify the workflow file is in `.github/workflows/deploy.yml`

## Current Status
- ✅ Repository exists: `AlifSakib/Portfolio-2025`
- ✅ Code is pushed to main branch
- ✅ Workflow file is configured
- ❌ GitHub Pages needs to be enabled in repository settings

**Next Action Required:** Enable GitHub Pages in repository settings as described above.
