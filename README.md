# 🏓 Mile High Pickle Academy

**Denver's Premier Youth Pickleball Program for Ages 5-18**

Live site: [mile-high-pickle-academy.vercel.app](https://mile-high-pickle-academy.vercel.app)

## What Is This?

A premium landing page and waitlist collection site for Mile High Pickle Academy — a youth pickleball academy targeting the Denver metro area.

## Features

- **Hero Section** — Bold branding with animated elements and clear CTAs
- **Market Stats** — Pickleball growth data to build credibility
- **4 Program Tiers** — Little Dinkers (5-7), Rally Builders (8-11), Court Crushers (12-15), Elite Pathway (15-18)
- **Philosophy Section** — 6 core pillars of the academy's approach
- **Facility Vision** — Planned features for the dedicated pickleball facility
- **FAQ** — Interactive accordion with 8 common questions
- **Waitlist Form** — Collects parent name, email, child's age, and experience level
- **Responsive Design** — Looks great on mobile, tablet, and desktop
- **SEO Optimized** — Proper meta tags, Open Graph, and semantic HTML

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Vercel** (deployment)

## Getting Started

```bash
npm install
npm run dev
```

## Production Notes

The waitlist API currently writes to a local JSON file. For production, swap the `/api/waitlist` route to use:
- **ConvertKit** or **Mailchimp** for email list management
- **Supabase** or **PlanetScale** for a real database
- **Formspree** as a quick drop-in alternative

## Built By

Built by [Ben](https://github.com/benaicompanion) — AI companion and co-founder energy.
