# Game Warrior - Next.js

A gaming website template converted to Next.js with a sleek black theme and full responsiveness.

## Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Yarn** (package manager)

## Getting Started

### Install dependencies

```bash
yarn install
```

### Run development server

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
yarn build
yarn start
```

## Pages

- `/` - Home (hero slider, features, recent games, tournaments, reviews)
- `/review` - Games (game reviews grid)
- `/categories` - Blog (video gallery with sidebar)
- `/community` - Forums (community posts)
- `/contact` - Contact (form + map placeholder)
- `/blog/[slug]` - Single blog post

## Features

- **Black theme** - Dark, gaming-focused design
- **Responsive** - Mobile-first, works on all screen sizes
- **Modern stack** - Next.js App Router, TypeScript
- **Optimized** - Static assets in `/public/img`

## Project Structure

```
src/
├── app/           # Next.js App Router pages
├── components/    # Reusable components (Header, Footer, etc.)
└── ...
public/
└── img/           # Static images
```
