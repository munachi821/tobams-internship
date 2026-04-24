# Tobams Group Assessment

This is a fully responsive landing page built with [Next.js](https://nextjs.org) (App Router) and Tailwind CSS for the Tobams Group assessment.

## Live Deployment
**Live URL:** [Insert Vercel/Netlify URL Here]  *(Please deploy and update this!)*

## Setup Instructions

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Design Decisions & Technical Details

- **Framework:** Next.js 13+ App Router.
- **Component Structure:** The UI has been broken down into semantic, modular components (`Navbar`, `Footer`, `HeroSection`, `TestimonialsSection`, etc.) housed in the `/components` folder to prevent a monolithic page file.
- **Styling:** Standard Tailwind CSS (v4) was used with custom colors specified in the global styles. Breakpoints (`sm:`, `md:`, `lg:`) were utilized heavily to create a seamless transition from mobile (425px) to tablet (768px) and desktop (1280px+). No custom media queries or external UI component frameworks (like MUI or Bootstrap) were used.
- **Accessibility:** Semantic HTML elements (`<main>`, `<nav>`, `<section>`, `<header>`, `<footer>`) are used throughout. All `<Image>` tags include meaningful `alt` descriptions. 
- **AI Disclosure:** AI tools were used to assist in writing, structuring, and verifying standard boilerplate code, semantic HTML checks, responsive breakpoints testing, and refactoring the monolithic `page.tsx` into smaller maintainable React components. All AI usage was guided and reviewed to maintain strict Figma fidelity.
