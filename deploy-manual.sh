#!/bin/bash

echo "🚀 Deploying Portfolio to GitHub Pages..."

# Build the project
echo "📦 Building the project..."
npm run build

# Deploy using gh-pages
echo "🌐 Deploying to GitHub Pages..."
npx gh-pages -d out

echo "✅ Deployment complete!"
echo "🔗 Your site will be available at: https://alifsakib.github.io/Portfolio-2025/"
echo "⏱️  It may take a few minutes to be live."
