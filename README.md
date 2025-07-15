# 🌿 YOU Continuum – Self-Care Compass Platform

**YOU Continuum** is a values-based self-care platform helping users identify and prioritize life domains through introspection and impact scoring. This project is built with **Next.js** and integrates a WordPress-powered blog.

---

## 🚀 Project Overview

- **Framework:** Next.js (static export mode)
- **Deployment:** Hostinger (FTP-based)
- **Blog:** WordPress installed at `/blog`
- **PDF Generation:** jsPDF
- **Styling:** Tailwind CSS

---

## 📁 Directory Structure

```bash
.
├── public/              # Static assets (images, logos, icons)
├── pages/               # All route-based pages (e.g., /philosophy, /results)
├── components/          # Reusable React components
├── styles/              # Tailwind and custom styles
├── constants/           # Value mappings, domain definitions
├── out/                 # Static output after export (used for deployment)
├── next.config.js       # Next.js configuration
├── package.json         # Project dependencies and scripts
└── .htaccess            # Apache routing rules for SPA/WordPress split

🧪 PDF Generation

PDF export is handled with jsPDF. Results from the Final Summary are dynamically inserted into a downloadable report.

⸻

✅ TODOs
	•	Add CMS integration for Life Domain content?
	•	Setup CI/CD pipeline for build & FTP upload
	•	Improve accessibility and SEO

🧠 Philosophy

This project encourages self-awareness by helping users slow down, reflect on their core values, and take aligned action toward holistic well-being.

⸻

👤 Creator

Built with love by Kinan Adams, Designer and Developer behind Alldazework.
For collaboration inquiries, visit design@alldazework.com
