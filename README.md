# Tobams Group Assessment

This is a fully responsive landing page built with [Next.js](https://nextjs.org) (App Router) and Tailwind CSS for the Tobams Group assessment.

## Live Deployment

**Live URL:** [Insert Vercel/Netlify URL Here] _(Please deploy and update this!)_

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
- **Styling:** Standard Tailwind CSS (v4) was used with custom colors specified in the global styles. Breakpoints (`sm:`, `md:`, `lg:`) were utilized heavily to create a seamless transition from mobile (425px) to tablet (768px) and desktop (1280px+).
- **Accessibility:** Semantic HTML elements (`<main>`, `<nav>`, `<section>`, `<header>`, `<footer>`) are used throughout. All `<Image>` tags include meaningful `alt` descriptions.
- **AI Disclosure:** I used AI tools to assist in cross-checking some issues I was having in the testimonial section (some text characters were not visible and they were showing indenting errors). I also used AI to write this README.
- **Issues Encountered:** I was having issues with the testimonial section where some text characters were not visible and showed indenting errors. Also, some of the text for mobile and larger screens was not the same, so I had to account for that while coding.
