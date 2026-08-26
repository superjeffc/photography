# Jeff Chan Photography - Web Application & Booking Platform

A high-performance, modern web application designed and developed for Jeff Chan Photography, a New York City-based portrait and lifestyle photography practice. Built with React 19, TypeScript, Vite, and Tailwind CSS v4, this application serves as both a client-facing portfolio showcase and an interactive session booking platform.

## Overview & Portfolio Highlights

This project demonstrates production-grade frontend architecture, modular component design, serverless backend integrations, and privacy-first engineering practices.

### Key Capabilities

- **Interactive Portfolio & Lightbox**: Showcase of high-resolution portrait, couples, branding, and location photos with category filtering and interactive lightboxes.
- **Curated NYC Shoot Locations**: Visual location guide highlighting iconic NYC shoot spots including Central Park & Bow Bridge, SoHo Cast-Iron District, Brooklyn Bridge Walkway, DUMBO, and Gantry Plaza State Park.
- **Interactive Package & Investment Calculator**: Real-time session customizer allowing clients to select base packages (Essential, Signature, Deluxe), select target shoot locations, and add session upgrades (such as expedited 48-hour delivery or extra retouched edits) with dynamic price calculation.
- **Serverless Booking & Webhook Pipeline**: Interactive booking modal with client-side form validation, confetti celebration feedback, and asynchronous dispatch to a custom Google Apps Script serverless backend (`google-apps-script.js`). Inquiries trigger formatted HTML notification emails directly to the photographer and log entries in Google Sheets.
- **Anti-Spam & Privacy Safeguards**:
  - *Honeypot Trap*: Invisible form fields trap automated bots, blocking spam before form processing.
  - *Obfuscated Contact Components*: Contact components (`ProtectedContact.tsx`) assemble email addresses (`jeff@superjeffc.com`) and phone numbers dynamically on user action, preventing automated web harvester scraping.
- **Curated Visual Guidelines**: Curation logic following precise style standards—focusing on candid, warm, direct-to-camera portraiture with soft background bokeh and dynamic action captures.

## Tech Stack & Architecture

- **Frontend Framework**: React 19
- **Type Safety**: TypeScript 6.0
- **Build Tool & Bundler**: Vite 8 with Hot Module Replacement (HMR)
- **Styling & Design System**: Tailwind CSS v4 with custom glassmorphism and gradient utilities
- **UI Components & Icons**: Lucide React
- **Interactive Effects**: Canvas Confetti
- **Linting & Code Quality**: Oxlint 1.79
- **Backend Webhook**: Google Apps Script (JavaScript) with Google Workspace Gmail & Sheets integration

## Project Structure

```
photography/
├── google-apps-script.js    # Serverless backend script for handling inquiry webhooks
├── index.html               # Main HTML entry point
├── package.json             # Dependencies and npm scripts
├── vite.config.ts           # Vite configuration
├── .oxlintrc.json           # Oxlint configuration
├── public/                  # Static assets and photo galleries
└── src/
    ├── App.tsx              # Root application layout component
    ├── main.tsx             # Application mounting point
    ├── index.css            # Global styles and Tailwind configuration
    ├── components/          # Reusable UI components
    │   ├── AboutPhotographer.tsx # Bio, approach, and photography philosophy
    │   ├── BookingModal.tsx      # Modal form with webhook dispatch & honeypot
    │   ├── FaqSection.tsx        # Frequently asked questions accordion
    │   ├── Footer.tsx            # Footer navigation & copyright
    │   ├── Hero.tsx              # Landing hero banner with quick CTA
    │   ├── LocationShowcase.tsx  # NYC location showcase
    │   ├── Navbar.tsx            # Responsive top navigation bar
    │   ├── PackageCalculator.tsx # Interactive package pricing engine
    │   ├── PortfolioGallery.tsx  # Filterable image gallery & lightbox
    │   ├── ProtectedContact.tsx  # Bot-protected email & phone obfuscation
    │   └── Testimonials.tsx     # Client reviews and testimonials
    └── data/
        └── photographyData.ts    # Centralized data model for locations, packages, and gallery items
```

## Setup & Local Development

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd photography
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the root directory and add your Google Apps Script Webhook URL:
   ```env
   VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```

### Available Scripts

- **`npm run dev`**: Build project and launch Vite preview server on `http://0.0.0.0:5173`.
- **`npm run dev:vite`**: Launch Vite development server with Hot Module Replacement.
- **`npm run build`**: Type-check with TypeScript (`tsc -b`) and build optimized production bundle.
- **`npm run preview`**: Preview the built production site locally.
- **`npm run lint`**: Execute Oxlint to check code quality and lint rules.

## Webhook Backend Integration

The application integrates with `google-apps-script.js` to process inquiry form submissions seamlessly without requiring a dedicated persistent server.

1. Create a new Google Apps Script project under your Google account.
2. Paste the contents of `google-apps-script.js` into the editor.
3. Deploy as a Web App with access permissions set to **Anyone**.
4. Copy the resulting Web App URL into your `.env` file as `VITE_GOOGLE_SCRIPT_URL`.

When a client submits an inquiry through the application, the backend:
- Validates the payload and blocks honeypot-triggered bot requests.
- Formats an HTML email notification sent to `jeff@superjeffc.com` with reply-to set to the client's email address.
- Appends the inquiry metadata (Reference ID, Name, Email, Phone, Location, Session Type, Requested Date, Notes) to a Google Sheet log.

---

## Original Template Information

The following section contains the original template setup documentation provided by Vite and React.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

---

## License & Rights Reserved

Copyright (c) 2026 Jeff Chan Photography (Jeff Chan). All rights reserved.

All rights reserved. This repository, including all source code, design architecture, component implementations, documentation, and digital assets, is the sole property of Jeff Chan. No part of this repository or application may be copied, reproduced, redistributed, modified, or transmitted in any form or by any means without express prior written authorization from the copyright holder.
