# GD Pandya Associates — Modern React Frontend

> Modern, ultra-fast, luxury legal frontend for **GD Pandya Associates** (Advocate Gaurav D. Pandya & Associates), built to replace the monolithic WordPress/PHP installation.

---

## 🏛️ Project Details

* **Firm:** GD Pandya Associates
* **Principal:** Advocate Gaurav D. Pandya (B.Com, L.L.B., DLLP)
* **Accreditations:** Government of India Notary · Registered Trademark Attorney · Bar Council of Gujarat (2007)
* **Office:** Office No. 241, 2nd Floor, Madhav Square, Limda Lane Corner, Jamnagar – 361001, Gujarat, India
* **Phone / WhatsApp:** +91 98985 98184
* **Email:** advocate_pandya@hotmail.com

---

## ⚡ Tech Stack

* **React 19** — Component-driven reactive UI
* **Vite 6** — Lightning-fast build tool and HMR
* **Tailwind CSS v4** — Modern utility styling with custom legal theme tokens
* **React Router v7** — Client-side declarative routing
* **Lucide React** — Elegant vector legal and interface iconography
* **Google Fonts** — *Cinzel*, *Playfair Display*, and *Plus Jakarta Sans*

---

## 📁 Project Structure

```
gd-pandya-react/
├── public/
│   └── assets/
│       ├── logo.png                      # GD Pandya Associates official logo
│       ├── business-card.jpeg            # Official visiting card / Govt. Notary seal
│       ├── hero-legal.jpg                # Justice scales / legal background
│       └── team/
│           ├── gaurav-pandya.jpeg        # Principal Advocate portrait
│           ├── gaurav-pandya-office.jpeg # Adv. Pandya in Jamnagar law office
│           ├── falguni-pandya.jpg        # Partner / Senior Counsel
│           ├── dhruv-ajudiya.png         # Legal Associate
│           ├── drashti-abhangi.jpg       # Legal Associate
│           ├── khyati-bhatt.jpg          # Legal Associate
│           └── alifiya-vaghela.jpg       # Legal Associate
├── src/
│   ├── main.jsx                          # React application root
│   ├── App.jsx                           # Route declarations
│   ├── index.css                         # Tailwind v4 theme & glassmorphic styling
│   ├── data/
│   │   └── firmData.js                   # Single source of truth for practice areas, team & stats
│   ├── components/
│   │   ├── layout/
│   │   │   ├── TopBar.jsx                # Phone, email, office hours bar
│   │   │   ├── Navbar.jsx                # Sticky glassmorphic nav with consultation trigger
│   │   │   ├── Footer.jsx                # Multi-column footer with Bar Council disclaimer
│   │   │   ├── Layout.jsx                # Persistent shell wrapper
│   │   │   └── ScrollToTop.jsx           # Auto-scroll restoration
│   │   ├── home/
│   │   │   ├── HeroSection.jsx           # High-impact hero with credentials & office visual
│   │   │   ├── AboutSnippet.jsx          # Founder introduction & business card spotlight
│   │   │   ├── PracticeAreas.jsx         # 6 interactive practice area cards
│   │   │   ├── TeamShowcase.jsx          # Complete 6-member advocate presentation
│   │   │   ├── WhyChooseUs.jsx           # Public & banking panels (Central Bank, Union Bank, Univ)
│   │   │   └── ContactCTA.jsx            # High-conversion bottom consultation banner
│   │   └── ui/
│   │       ├── WhatsAppFAB.jsx           # Floating direct WhatsApp contact (+91 98985 98184)
│   │       ├── DisclaimerModal.jsx       # Bar Council of India compliance modal
│   │       └── ConsultationModal.jsx     # Interactive case inquiry form
│   └── pages/
│       ├── Home.jsx                      # Comprehensive landing page
│       ├── About.jsx                     # Founder journey, education, and credentials
│       ├── PracticeAreasPage.jsx         # In-depth practice domains with anchor navigation
│       ├── Team.jsx                      # Detailed associate profiles & court admissions
│       └── Contact.jsx                   # Jamnagar office details, form & Google Maps embed
├── package.json
└── vite.config.js
```

---

## 🚀 Running the Project Locally

```bash
# 1. Navigate to the project directory
cd gd-pandya-react

# 2. Start Vite development server
npm run dev
```

The app will be available at: **`http://127.0.0.1:5173/`**

---

## 🏗️ Production Build

```bash
cd gd-pandya-react
npm run build
```

This compiles optimized static assets into the `dist/` directory, ready to deploy.

---

## 🌐 Free Instant Deployment Options

### Option 1: Vercel (Recommended)
1. Push `gd-pandya-react` to GitHub.
2. Import project into [Vercel](https://vercel.com).
3. Framework Preset: **Vite**.
4. Click **Deploy**. Connect `advocate-pandya.com` in Domain settings.

### Option 2: Netlify
1. Run `npm run build`.
2. Drag and drop the `dist/` folder into [Netlify Drop](https://app.netlify.com/drop).
3. Set custom domain `advocate-pandya.com`.
