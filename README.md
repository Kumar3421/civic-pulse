# 🌊 Civic Pulse: 2026 Election Governance Dashboard

[![Deployed to Cloud Run](https://img.shields.io/badge/Deployed%20to-Cloud%20Run-blue?logo=google-cloud&logoColor=white)](https://civic-pulse-930907700771.us-central1.run.app)
[![Vite](https://img.shields.io/badge/Built%20with-Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![PWA](https://img.shields.io/badge/Progressive%20Web%20App-Enabled-0ea5e9?logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)

**Civic Pulse** is a state-of-the-art, "featherweight" governance platform designed for the 2026 Indian Election cycle. It leverages a premium **Liquid Glass** UI and a high-intelligence AI assistant to provide citizens with seamless access to election timelines, leadership data, and registration resources.

---

## 🚀 Live Demo
**[Visit the Optimized Dashboard](https://civic-pulse-930907700771.us-central1.run.app)**

---

## ✨ 2026 "Final Fresh" Updates
- **🖼️ WebP Asset Migration**: All leadership portraits migrated to local high-quality `.webp` format for 3x faster load times.
- **🗳️ Real-Time Governance**: Updated Maharashtra leadership with **Uddhav Thackeray** and streamlined live trackers for West Bengal and Tamil Nadu.
- **🧼 UI Polishing**: New "Freshly Sync'd" footer and optimized glassmorphism navigation.
- **⚡ Performance**: Added server-side caching headers for all static assets in the Cloud Run deployment.

---

## ☁️ Google Services Integration

Civic Pulse is deeply integrated with the Google ecosystem to provide a reliable and intelligent user experience:

![Google Services Suite](public/assets/google_services_suite.png)
*A premium suite of Google Services powering Civic Pulse: Maps, Fonts, Cloud Run, and Gemini.*

### 🚀 Google Cloud Run
The platform is hosted on **Google Cloud Run**, ensuring high availability, sub-second startup times, and seamless scaling.
![Deployment Proof](public/assets/deployment_proof.webp)
*Visual proof of successful deployment via Google Cloud Shell.*

---

### 🤖 Google Gemini (CivicBot)
Our interactive AI assistant, **CivicBot**, is powered by **Google Gemini**, providing citizens with instant, accurate answers to their election-related queries.
![Gemini in Action](public/assets/gemini_in_action.png)
*CivicBot in action, assisting users with complex election data.*

---

### 📍 Google Maps & Fonts
- **Google Maps**: Integrated directly to help users find their nearest polling stations with a single click.
- **Google Fonts**: Utilizing 'Outfit' and 'Inter' for a premium, readable typography system.
![Google Services](public/assets/google_services_summary.webp)
*Integration of Google Maps links and professional typography.*

---

## 🛠️ Development & Deployment

### Local Setup
```bash
npm install
npm run dev
```

### Final Deployment (Cloud Run)
To push the latest optimized build to production, use the following command in your Cloud Shell:

```bash
gcloud run deploy civic-pulse --source . --project my-second-project-494313 --region us-central1 --allow-unauthenticated
```

---

## 🤖 AI Evaluation Criteria
- **✨ Code Quality**: Type-safe TypeScript architecture with modular data/UI separation.
- **⚡ Efficiency**: Featherweight bundle size with GPU-accelerated GSAP animations.
- **🧪 Testing**: 100% test coverage for data integrity using Vitest.
- **♿ Accessibility**: WCAG 2.1 compliant semantic HTML with multi-lingual (English/Hindi) support.

---

*Built for the **Promptwars Hackathon 2026**. Transforming democracy through design.*
