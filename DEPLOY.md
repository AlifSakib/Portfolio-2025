# Deploy to GitHub Pages Guide

This portfolio is now configured for GitHub Pages deployment with static export.

## Quick Setup

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages deployment"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on **Settings** tab
   - Scroll down to **Pages** section
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically deploy your site

## What was configured:

### 1. Next.js Configuration (`next.config.ts`)
- Added `output: 'export'` for static export
- Added `trailingSlash: true` for better GitHub Pages compatibility  
- Added `images: { unoptimized: true }` since GitHub Pages doesn't support Next.js Image Optimization

### 2. GitHub Actions Workflow (`.github/workflows/deploy.yml`)
- Automatically builds and deploys on push to main branch
- Uses Node.js 20 for build
- Uploads the `out` directory to GitHub Pages

### 3. Server Actions Removed
- Contact form now uses `mailto:` links (opens user's email client)
- Chatbot now uses client-side responses instead of AI server actions
- This makes the site fully static and compatible with GitHub Pages

### 4. Build Scripts Updated
- Added `export` script in package.json for manual static export

## Manual Deployment (Alternative)

If you prefer manual deployment:

1. **Build the static site:**
   ```bash
   npm run build
   ```

2. **The static files will be in the `out` directory**

3. **Deploy the `out` directory contents to GitHub Pages manually**

## Local Testing

To test the static build locally:
```bash
npm run build
cd out
python -m http.server 8000
# Or use any static file server
```

## Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file to the `public` directory with your domain
2. Configure DNS to point to `<username>.github.io`

Your portfolio will be available at: `https://<username>.github.io/<repository-name>/`
