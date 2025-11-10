# ScamSense UI

## Overview
ScamSense is a web application designed to help users analyze suspicious messages and identify potential scams. The application features a modern  theme with a cyber shield aesthetic.

## Getting Started

### Prerequisites
- Node.js
- pnpm
- golang

### Installation
1. Clone the repository.
2. Navigate to the project directory.
3. Run the following command to install dependencies:
   ```bash
   make deps
   ```

### Running the Application
To start the development server, run:
```bash
make run proj=webapp/webapp
```

### Environment Variables
Create a `.env` file in the root directory with the following content:
```
VITE_APP_NAME="ScamSense"
VITE_API_BASE_URL="http://localhost:8080"
```

## Design Tokens
The application uses CSS variables for design tokens, allowing for easy theming and customization. The tokens are defined in `src/styles/tokens.css`.


## Security
User-generated content is handled securely, with no auto-linking of URLs. Users are advised to verify any links through official channels.

## Results Panel
Scam Score (0–100)
→ Color-coded bar (Green–Yellow–Red)

Main Verdict:

✅ Likely Safe

⚠️ Suspicious

🚨 Likely Scam

Breakdown:
 - Urgency tricks (e.g., “act now”, “limited time”)
 - Emotion triggers (fear, reward)
 - Domain mismatch (paypal-login.com ≠ paypal.com)
 - Grammar / typo patterns
 - Sender impersonation (“Apple ID”, “IRS”, etc.)

Educational Tip Box:
“Scammers often pretend to be trusted companies and create fake urgency. Never click links asking for login verification.”

## Test cases
🧩 1️⃣ Public Datasets (Free + Real-World Sources)
1. Kaggle – Email Spam Classification Dataset
2. Kaggle – Phishing Email Dataset for Text Classification
3. SpamAssassin Public Corpus
4. Enron Email Dataset (filtered)
5. Bitdefender Scamio Samples
6. PhishTank

🧪 2️⃣ Create Your Own Test Cases

You can handcraft a balanced local test suite like this:

Category	Example	Expected Verdict
 - ✅ Legitimate	“Your Amazon package has shipped. Track here: amazon.com/track.”	Likely Safe
 - ⚠️ Suspicious	“Dear user, your bank account is temporarily locked. Click here to verify.”	Suspicious
 - 🚨 Scam	“Congrats! You’ve won $5000. Reply with your SSN to claim.”	Likely Scam
 - ✅ Legitimate	“Reminder: team meeting at 2 PM via Zoom.”	Likely Safe
 - ⚠️ Suspicious	“Update your PayPal password immediately using the link below.”	Suspicious
 - 🚨 Scam	“IRS refund available. Submit details within 24h or penalty applies.”	Likely Scam

💡 Include:
 - Brand impersonations: fake “Apple ID,” “PayPal,” etc.
 - Emotional lures: urgency, fear, reward, authority tone.
 - Random benign messages: simple chats, notifications.
 - Fake domains: e.g., paypal-login-secure.com.
 - Multi-language cases: Spanish, Hindi, etc. (detect behavior on non-English).

## Trust Building
1. **Privacy-first promise** — “Your text never leaves your browser” (if local) or “We delete after 30 seconds.”
2. **Open-source model** — Code is available on GitHub to inspire confidence.
3. **Explainable results** — Not just “scam: yes/no” but clear explanations of why.
4. **Verified partnerships** — Links to FTC, BBB, or consumer protection organizations.
5. **“Learn Mode” toggle** — Turns results into educational snippets (great for seniors).
6. **Community voting (phase 2)** — Users can report new scams to improve training.

## Monetization
## Growth / Virality Hooks

## Todo
# ScamSense UI Build Checklist

- [ ] Scaffold Vite + React (JavaScript) project in scamsense-ui
- [ ] Add dependencies: react-router-dom, classnames, zustand, zod, framer-motion
- [ ] Add dev tooling: eslint, prettier, eslint-plugin-react, eslint-config-prettier, postcss, autoprefixer
- [ ] Create .env with VITE_APP_NAME and VITE_API_BASE_URL
- [ ] Set up CSS Modules: src/styles/tokens.css, src/styles/base.css
- [ ] Create postcss.config.js with autoprefixer
- [ ] Set up index.html: meta, theme-color, favicon placeholder
- [ ] Create main.jsx, App.jsx, routes.jsx
- [ ] Create pages: Home.jsx, History.jsx, About.jsx, Privacy.jsx
- [ ] Create Brand/Logo.jsx (+ Logo.module.css)
- [ ] Create Analyzer components: InputPanel, ResultCard, ReasonChips, RiskyLinks, LearnMode (+ CSS modules)
- [ ] Create Chrome components: TopNav, SettingsModal, Footer (+ CSS modules)
- [ ] Create Common/Loading.jsx (+ Loading.module.css)
- [ ] Create lib/api.js, lib/text.js
- [ ] Create store/useAppStore.js (zustand, localStorage persistence)
- [ ] Set up public/manifest.webmanifest, public/icons/*
- [ ] Implement dark theme, design tokens, and cyber shield aesthetic
- [ ] Implement accessibility and security UX requirements
- [ ] Add README with setup, scripts, design tokens, and theme notes
- [ ] Test: pnpm i && pnpm dev opens the UI, mock mode works, settings/history persist, a11y ≥ 95, responsive, no external CSS frameworks, no clickable user links

## License
This project is licensed under the MIT License.
