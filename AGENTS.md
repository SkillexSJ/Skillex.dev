<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->



# Portfolio Website Layout Design

Design a premium, futuristic portfolio website that follows the layout and visual hierarchy of a modern SaaS dashboard rather than a traditional portfolio website.

The design should feel clean, luxurious, minimal, and highly interactive while maintaining excellent usability and readability.

Do NOT copy any existing design. Instead, create an original interface inspired by modern products like Linear, Vercel Dashboard, Framer, Stripe Dashboard, Raycast, and Apple.

---

## Overall Layout

Use a centered container with a maximum width of approximately 1500px.

Structure the page as follows:

Navbar
↓

Large Hero Banner

↓

Floating Sidebar Profile Card overlapping the Hero

↓

Dashboard Content Area

↓

Projects

↓

Experience

↓

Skills

↓

Contact

↓

Footer

The desktop layout should use a 12-column grid.

- Left Sidebar: 3 columns
- Main Content: 9 columns

On tablets and mobile devices, collapse the layout into a single column.

---

## Navbar

Create a fixed glassmorphism navigation bar.

Contents:

- Logo
- Search Bar
- Navigation Links
- GitHub Button
- LinkedIn Button
- Theme Toggle
- Profile Avatar

The navbar should have:

- backdrop blur
- transparent background
- subtle border
- rounded corners
- floating appearance

---

## Hero Section

Place a large rounded hero banner directly below the navbar.

The hero should contain:

- Animated blue-to-cyan gradient
- Large heading introducing the developer
- Short subtitle
- Primary CTA button
- Secondary CTA button
- Soft glowing blurred circles
- Very subtle background noise

The hero should emphasize whitespace instead of excessive text.

---

## Floating Sidebar Profile Card

Position a floating profile card that partially overlaps the hero section.

This should be the primary focal point of the interface.

The card should contain:

- Circular Profile Picture
- Name
- Professional Title
- Current Status (Available for Work)
- Location
- Years of Experience
- Resume Download Button
- Social Links
- Skill Tags
- Short About Section

At the bottom include:

- GitHub
- LinkedIn
- Email
- Twitter

The card should remain sticky while scrolling on desktop.

---

## Dashboard Content

The right side should feel like an admin dashboard.

Everything should be organized into premium rounded cards with generous spacing.

Use approximately 32px spacing between cards.

Each card should have:

- dark background
- subtle border
- soft shadow
- rounded corners
- hover elevation
- slight glow effect

---

## Filter Navigation

At the top of the dashboard include pill-style navigation such as:

- All
- Projects
- Experience
- Skills
- Blog
- Contact

On the right side include a small dropdown:

Latest
Featured
Popular

---

## Featured Projects

Display projects inside a responsive grid.

Desktop:

2 columns

Tablet:

2 columns

Mobile:

1 column

Each project card should contain:

- Project Thumbnail
- Title
- Short Description
- Technology Stack
- GitHub Button
- Live Demo Button
- Tags

Project cards should animate upward slightly on hover.

---

## Experience

Create a modern vertical timeline.

Each timeline entry should contain:

- Year
- Position
- Company
- Description
- Technologies Used

Animate the timeline while scrolling.

---

## Skills

Instead of progress bars, display technologies using rounded skill chips.

Example:

React

Next.js

TypeScript

Node.js

Express

MongoDB

PostgreSQL

Docker

AWS

Python

AI

GraphQL

Each chip should have hover animations and soft glow.

---

## About Section

Display a clean card containing:

- Personal Introduction
- Development Philosophy
- Current Focus
- Career Goals

Keep typography minimal and readable.

---

## Contact Section

Split into two columns.

Left:

- Email
- Phone
- Location
- Availability

Right:

Modern Contact Form

Fields:

- Name
- Email
- Subject
- Message

Rounded inputs with floating labels.

---

## Footer

Minimal footer containing:

- Logo
- Navigation
- Social Links
- Copyright
- Built with Next.js

---

## Design Style

Theme:

Dark

Background:

#0B0B0B

Cards:

#171717

Border:

rgba(255,255,255,0.05)

Primary Accent:

Blue/Cyan Gradient

Rounded Corners:

24px

Large Shadows

Glassmorphism

Soft Blur

Subtle Glow

Large Whitespace

Minimal Typography

---

## Motion

Use Framer Motion.

Animations should include:

- Fade Up
- Slide In
- Scale
- Blur Reveal
- Stagger Children
- Hover Lift
- Smooth Page Transitions
- Floating Hero Background
- Gradient Animation
- Magnetic Buttons
- Cursor Glow

All animations should be subtle and premium.

---

## Responsive Design

Desktop:

- Sticky Sidebar
- Dashboard Layout
- Two-column Projects

Tablet:

- Sidebar moves above content
- Reduced spacing

Mobile:

- Single column layout
- Full width cards
- Reduced hero height
- Responsive typography
- Full width buttons

---

## UI Principles

Prioritize whitespace over clutter.

Every section should feel like a premium software dashboard rather than a traditional portfolio.

Maintain perfect alignment using an 8px spacing system.

Use consistent border radius across all components.

Avoid unnecessary decorations.

The final result should feel like a blend of Apple, Linear, Vercel, Framer, and Stripe while remaining unique and original.