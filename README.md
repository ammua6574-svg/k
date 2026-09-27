# InfySkill EduTech Pvt. Ltd. — Official Website

Corporate presentation website for **InfySkill EduTech Pvt. Ltd.** ([InfySkill.in](https://InfySkill.in)) — a Visakhapatnam-based EdTech, training, internship, project guidance and career development company.

**Empowering Skills. Transforming Futures.** — Practical Learning. Real Skills. Better Careers.

## Overview

This is a presentation-only website (no e-commerce, no payments, no login):
- Training services (Non-Technical, Core Technical, Advanced Technical)
- Industry-oriented internships
- Mini & major project guidance
- Company-specific training
- ERP & website services for colleges
- Personal Practice Platform (assessments, AI mock interviews, AI GDs, resumes, analytics)
- College Dashboard for TPOs & faculty
- Contact & enquiry form

## Tech Stack

- **React 19** + **Vite 8**
- **Tailwind CSS v4**
- **Lucide React** icons
- Custom inline SVG illustrations (hero, ERP dashboard) — no external image dependencies
- Light / Dark theme with persistence (`infyskill-theme` in localStorage) and system-preference detection
- Smooth scrolling, scrollspy navigation, fade-in-on-scroll, scroll progress bar, back-to-top

## Getting Started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
npm run lint     # oxlint
```

## Project Structure

```
src/
├── components/     # One component per section (Navbar, Hero, About, Services, ...)
├── data/site.js    # Central site info (phone, emails, nav links, etc.)
├── hooks/          # useTheme
├── App.jsx         # Section assembly
└── index.css       # Tailwind theme tokens (navy / orange / green), animations
```

## Deployment

Static SPA — deploy `dist/` to any static host (Vercel, Netlify, GitHub Pages, cPanel).