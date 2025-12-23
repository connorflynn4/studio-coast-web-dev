# Studio Coast - Next.js Application

A modern Next.js application for Studio Coast, a software development house focused on AI-integrated web applications.

## Features

- 🎨 Pixel-perfect design matching the original HTML
- 🌓 Light/Dark mode toggle
- ⚡ Next.js 14 with App Router
- 🎯 TypeScript support
- 🎨 Tailwind CSS
- 📱 Fully responsive
- 🎭 Component-based architecture

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
nextjs/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Background.tsx
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Capabilities.tsx
│   ├── InteractiveGraphic.tsx
│   ├── Process.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── hooks/
│   └── useTheme.ts     # Theme management hook
└── package.json
```

## Build for Production

```bash
npm run build
npm start
```

## Notes

- All styling has been preserved exactly as the original HTML
- Theme toggle functionality uses localStorage for persistence
- Lucide React icons are used instead of Lucide script tags
- All components are client-side rendered where needed (using 'use client')

