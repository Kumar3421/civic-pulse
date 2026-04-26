#!/bin/bash

# Civic Pulse - Premium Deployment Script
# This script automates the deployment to Google Cloud Run using Cloud Build.

set -e

# --- Configuration ---
PROJECT_ID=$(gcloud config get-value project)
SERVICE_NAME="civic-pulse"
REGION="us-central1"

echo "---------------------------------------------------"
echo "🚀 Starting Civic Pulse Deployment to GCP"
echo "Project: $PROJECT_ID"
echo "Service: $SERVICE_NAME"
echo "Region:  $REGION"
echo "---------------------------------------------------"

# Check if gcloud is authenticated
if ! gcloud auth list --filter=status:ACTIVE --format="value(account)" | grep -q "@"; then
    echo "❌ Error: Not authenticated with gcloud. Please run 'gcloud auth login'."
    exit 1
fi

echo "📦 Submitting build to Google Cloud Build..."
gcloud builds submit --config cloudbuild.yaml .

echo ""
echo "---------------------------------------------------"
echo "✅ Deployment Complete!"
echo "Your platform is now live on Google Cloud Run."
echo "URL: $(gcloud run services describe $SERVICE_NAME --platform managed --region $REGION --format 'value(status.url)')"
echo "---------------------------------------------------"
