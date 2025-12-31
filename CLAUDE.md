# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an educational website for engineering leadership career paths, built with Next.js. The site presents roadmaps for Engineering Manager, Senior Engineering Manager, and Director roles.

## Development Commands

All commands run from the `website/` directory:

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run lint     # Run ESLint
npm start        # Start production server
```

## Architecture

- **Framework**: Next.js 16 with App Router and React Server Components
- **Styling**: Tailwind CSS 4 with dark mode theme (hardcoded in root layout)
- **Language**: TypeScript with strict mode and path alias `@/*` → `./src/*`

### Project Structure

```
website/
└── src/
    └── app/
        ├── layout.tsx    # Root layout with metadata
        ├── page.tsx      # Landing page with roadmap cards
        └── globals.css   # Tailwind imports and theme variables
```

The landing page contains three roadmap cards linking to individual roadmap pages (not yet implemented).

## Git Commits

Do not include "Generated with Claude Code" or "Co-Authored-By: Claude" in commit messages.

## Contribution Requirements

- Contributors must agree to the CLA (CLA.md) which assigns copyright to blumk
- All contributions become property of the repository owner per LICENSE.md
