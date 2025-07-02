#!/bin/bash

# GitHub Pages Deployment Script
# This script builds and optionally deploys the portfolio to GitHub Pages

echo "🚀 Starting GitHub Pages deployment process..."

# Build the project
echo "📦 Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Static files are ready in the 'out' directory"
    echo ""
    echo "🔗 To deploy to GitHub Pages:"
    echo "1. Commit and push your changes:"
    echo "   git add ."
    echo "   git commit -m 'Deploy to GitHub Pages'"
    echo "   git push origin main"
    echo ""
    echo "2. Enable GitHub Pages in your repository settings"
    echo "3. Select 'GitHub Actions' as the source"
    echo ""
    echo "🌐 Your site will be available at:"
    echo "   https://<username>.github.io/<repository-name>/"
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi
