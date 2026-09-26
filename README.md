# Olabode Alao — Portfolio

Personal portfolio website built with Next.js, Tailwind CSS, and TypeScript.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS with glassmorphism effects
- **Language:** TypeScript
- **Font:** Inter (Google Fonts)

## Getting Started

```bash
# Install dependencies
npm install

# Create your environment file
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Global layout & Navbar
│   ├── page.tsx                # Home (Hero, About, Projects, Contact)
│   ├── globals.css             # Tailwind + glassmorphism styles
│   ├── projects/page.tsx       # All projects (categorized)
│   └── certificates/page.tsx   # Credentials, community & events
├── components/
│   ├── Navbar.tsx              # Sticky nav with mobile hamburger
│   ├── Hero.tsx                # Intro & social links
│   ├── About.tsx               # Bio, education, experience, skills
│   ├── FeaturedProjects.tsx    # Top 4 projects on homepage
│   └── Contact.tsx             # Email, LinkedIn, WhatsApp, Instagram
└── data/
    └── index.ts                # All portfolio content (centralized)
```

## Deployment

```bash
npm run build
```

Deploy to Vercel, Netlify, or any Node.js host. Remember to set your environment variables in your hosting platform's dashboard.

## License

© Olabode Alao. All rights reserved.
