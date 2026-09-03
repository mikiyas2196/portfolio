# Mikiyas Sebsibe Taye — Professional Full-Stack Developer Portfolio

A clean, modern, responsive, and high-performance developer portfolio built specifically for **Mikiyas Sebsibe Taye** (Full-Stack Web Developer).

Built with **React 18**, **Vite**, **Tailwind CSS**, and **Lucide Icons**, and pre-configured for free static deployment on **Netlify** (including Netlify Forms integration).

---

## 🌟 Key Highlights & Features

- **Strict CV Fidelity**: Highlighting degree (BSc in IT, Jimma University, CGPA 3.78/4.00), CCNA certification, IT internship, independent project (Kenean Kids), team project (Construction Mgmt System), lab reservation system, and AI animation experience (50,000+ followers on TikTok).
- **Centralized Data Architecture**: All personal information, social handles, skills descriptions, projects, and achievements reside in `src/data/portfolioData.js`.
- **Dark / Light Theme Toggle**: Modern dark aesthetic by default with persistent light mode option saved in `localStorage`.
- **Netlify Forms Integration**: Complete static contact form setup requiring zero server infrastructure.
- **Accessible & Responsive**: Keyboard navigable modal dialog, ARIA labels, semantic markup, and responsive breakpoints tailored from mobile (320px) to desktop (1440px+).

---

## 🛠️ Technology Stack

- **Frontend Core**: React 18, Vite
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Icons**: Lucide React
- **Hosting Target**: Netlify (via `netlify.toml`)

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.x or higher recommended)
- npm or yarn

### 1. Installation

Clone or download the repository, navigate into the project root, and install dependencies:

```bash
npm install
```

### 2. Local Development

Run the Vite development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000`.

### 3. Production Build

Validate and compile the production bundle into the `dist/` directory:

```bash
npm run build
```

To preview the built production site locally:

```bash
npm run preview
```

---

## 🌐 Deploying to Netlify (Free Hosting)

This repository is ready for instant Netlify deployment:

1. Push your repository to **GitHub**.
2. Log in to [Netlify](https://www.netlify.com/) and click **"Add new site" -> "Import an existing project"**.
3. Select **GitHub** and authorize access to this repository.
4. Netlify will auto-detect the configuration from `netlify.toml`:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
5. Click **"Deploy site"**. Netlify will build and host your portfolio live within seconds!
6. **Netlify Forms**: Submissions through the Contact form will automatically appear in your Netlify Dashboard under **Forms**.

---

## 📝 Customization Guide

### 1. Updating Personal Info & Social Links
Open `src/data/portfolioData.js` and modify `personalInfo`:
```javascript
export const personalInfo = {
  name: "MIKIYAS SEBSIBE TAYE",
  socialLinks: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-profile",
    ...
  }
};
```

### 2. Replacing the CV Resume PDF
Drop your updated PDF file into the `public/` directory with the exact name:
```
public/Mikiyas-Sebsibe-Taye-CV.pdf
```
The "Download CV" buttons in the navigation bar and hero section will immediately download this file.

### 3. Replacing Project Screenshots
Drop your real project screenshots into:
```
public/images/projects/kenean-kids.png
public/images/projects/construction-mgmt.png
public/images/projects/lab-reservation.png
```
Then update the `image` paths in `src/data/portfolioData.js`.

---

## 📄 License

© 2026 Mikiyas Sebsibe Taye. All rights reserved.
