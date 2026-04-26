@echo off
echo.
echo ========================================
echo   CIVIC PULSE - FINAL DEPLOYMENT
echo ========================================
echo.
echo 1. Building and Pushing to Google Cloud Registry...
echo 2. Deploying to Google Cloud Run...
echo.
gcloud builds submit --config cloudbuild.yaml .
echo.
echo ========================================
echo   DEPLOYMENT TRIGGERED!
echo   Check the progress in the Cloud Console.
echo ========================================
pause
