# Edge Orthodontics — Website

A modern, multi-page orthodontic website built with **React + Vite + Tailwind CSS + Framer Motion**.

---

## Pages

| Page | Route |
|---|---|
| Home | `/` |
| Getting Started | `/getting-started` |
| Services | `/services` |
| Meet the Team | `/team` |
| Clinic Tour | `/clinic-tour` |
| Locations | `/locations` |
| Blog | `/blog` |
| Contact | `/contact` |
| Referral Form | `/referral-form` |

---

## Tech Stack

- **React 18** — UI framework
- **React Router v6** — Client-side routing
- **Vite 5** — Fast build tool
- **Tailwind CSS 3** — Utility-first styling
- **Framer Motion** — Animations & transitions

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## Deployment (Vercel)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import the GitHub repo
4. Leave all settings as default — Vercel auto-detects Vite
5. Click **Deploy**

> The `vercel.json` file is already included and handles React Router redirects so no page returns a 404.

---

## Customization

### Logo
Replace the placeholder in `src/components/Navbar.jsx` and `src/components/Footer.jsx`:
```jsx
{/* Replace this block with: */}
<img src="/edge-logo.svg" alt="Edge Orthodontics" className="h-10 w-auto" />
```
Place your logo file in the `/public` folder.

### Colors
Edit `tailwind.config.js`:
```js
colors: {
  navy: '#0b1624',   // Main dark background
  gold: '#d3b966',   // Primary accent
  cream: '#faf8f3',  // Text on dark
}
```

### Content
All real data (phone numbers, addresses, hours, doctor info) is already populated from the live site. Update any section in the relevant page file under `src/pages/`.

---

## Project Structure

```
edge/
├── public/               # Static assets (logo, images)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── Locations.jsx
│   │   └── OtherPages.jsx  (Getting Started, Team, Tour, Blog, Contact, Referral)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── vercel.json
└── package.json
```
