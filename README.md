# 🏗️ BuildCraft Constructions — Corporate Landing Page

> **Premium residential & commercial construction firm website built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, and Framer Motion.**

![Next.js](https://img.shields.io/badge/Next.js-16.2.9-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38BDF8?style=flat-square&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-FF0055?style=flat-square&logo=framer)

---

## 📌 Overview

**BuildCraft Constructions** is a fully responsive, single-page corporate website for a luxury construction firm. The site showcases services, portfolio projects, company stats, client testimonials, and a lead capture form — all wrapped in a premium dark-mode design system with gold accents, glassmorphism effects, and scroll-driven animations.

The site is built with:
- **Next.js App Router** for structure, layout, and metadata/SEO
- **Framer Motion** for rich scroll-triggered animations and page transitions
- **Tailwind CSS v4** with a fully custom design token system
- **React Icons** for icon consistency throughout the UI

---

## ✨ Features

### 🎨 Design System
- **Deep Navy + Gold** luxury color palette with full custom CSS design tokens
- **Glassmorphism** utility classes (`.glass-card`, `.glass-card-dark`)
- **Gold gradient text** utility (`.text-gold-gradient`) for premium headings
- **Inter** (body) + **Outfit** (headings) Google Fonts via Next.js font optimization
- Smooth scroll behavior, custom focus rings, and gold text selection styling
- Custom CSS keyframe animations: `fade-in`, `slide-up`, `slide-down`, `scale-up`, animated logo pulse

### 📱 Responsive Layout
- Mobile-first design across all sections
- Collapsible mobile navigation drawer with Framer Motion transitions
- Fluid grid layouts (1 → 2 → 3 columns) using Tailwind responsive prefixes

### 🔍 SEO & Metadata
- Full Open Graph tags (`og:title`, `og:description`, `og:type`, `og:siteName`, `og:locale`)
- Twitter Card metadata (`summary_large_image`)
- Semantic HTML5 structure with proper heading hierarchy (`h1` → `h4`)
- `robots: index, follow` configured
- Keyword-rich metadata targeting: construction, luxury home builders, commercial construction, interior design, renovations

### ⚡ Performance
- `next/image` with `fill`, `priority`, and responsive `sizes` for optimal image loading
- Google Fonts loaded via `next/font` with `display: swap` to prevent FOUT
- Scroll-triggered animations with `viewport: { once: true }` to avoid re-renders

---

## 🗂️ Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout — Navbar, Footer, metadata, fonts
│   ├── page.tsx            # Home page — renders all section components
│   ├── globals.css         # Global styles, design tokens (@theme), custom utilities
│   ├── favicon.ico
│   └── icon.svg
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Fixed navbar with scroll-aware bg + mobile drawer
│   │   ├── Footer.tsx      # Site footer with links, contact info, social
│   │   ├── Logo.tsx        # SVG logo component with animation class
│   │   └── PrimaryLogo.tsx # Alternate/primary logo variant
│   │
│   ├── sections/
│   │   ├── Hero.tsx              # Full-bleed hero with background image, stats strip
│   │   ├── About.tsx             # Two-column layout: story text + image with badge
│   │   ├── Services.tsx          # 3-column service cards with staggered animation
│   │   ├── WhyChooseUs.tsx       # 3-column feature cards (icon + title + description)
│   │   ├── ProjectsShowcase.tsx  # Filterable project grid (All/Residential/Commercial/Renovation)
│   │   ├── Timeline.tsx          # Scroll-driven alternating timeline (6 build phases)
│   │   ├── Stats.tsx             # Animated counter stats with scroll trigger
│   │   ├── Testimonials.tsx      # 2-column testimonial cards with star ratings
│   │   ├── FAQ.tsx               # Accordion FAQ with animated expand/collapse
│   │   └── Contact.tsx           # Validated lead form + contact info panel
│   │
│   └── ui/
│       ├── Button.tsx      # Reusable button: primary/secondary, sizes, icon slots, loading state
│       └── Container.tsx   # Reusable layout wrapper with configurable padding
│
public/
├── hero_bg.png             # Full-bleed hero background image
├── about_company.png       # About section company image
├── project_villa.png       # Crestview Villa — Residential project
├── project_office.png      # Apex Plaza Tower — Commercial project
├── project_apartment.png   # Meridian Residences — Residential project
├── project_renovation.png  # Aspen Chalet — Renovation project
├── avatar_1.png            # Testimonial avatar — Marcus Vance
├── avatar_2.png            # Testimonial avatar — Elena Rostova
├── avatar_3.png            # Testimonial avatar — Jonathan Hughes
├── avatar_4.png            # Testimonial avatar — Sarah Lin
└── logo/                   # Logo assets directory
```

---

## 🧩 Page Sections (in order)

| Section | Component | Description |
|---|---|---|
| **Hero** | `Hero.tsx` | Full-bleed architectural background, tagline, dual CTA buttons, 4-stat summary strip |
| **About** | `About.tsx` | Company story, 4 core values, image with floating "25 Years" badge |
| **Services** | `Services.tsx` | 6 service cards: Residential, Commercial, Renovation, Interior Design, Project Management, Architectural Consultation |
| **Why Choose Us** | `WhyChooseUs.tsx` | 6 feature pillars: Experienced Team, Quality Materials, On-Time Delivery, Transparent Pricing, Client Satisfaction, Modern Standards |
| **Projects** | `ProjectsShowcase.tsx` | 4 portfolio projects with category filter tabs (All / Residential / Commercial / Renovation) |
| **Process Timeline** | `Timeline.tsx` | 6-step alternating build timeline with scroll-drawn gold line |
| **Stats** | `Stats.tsx` | 4 animated counters: 350+ Projects, 25+ Years, 320+ Clients, 85 Team Members |
| **Testimonials** | `Testimonials.tsx` | 4 client reviews with star ratings and avatars |
| **FAQ** | `FAQ.tsx` | 5-question accordion: timelines, design consultation, locations, pricing, renovations |
| **Contact** | `Contact.tsx` | Validated lead form (6 fields) + office address, phone, email panel |

---

## 🛠️ Tech Stack

| Technology | Version | Role |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.2.9 | Framework (App Router) |
| [React](https://react.dev/) | 19.2.4 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | ^5.x | Static typing |
| [Tailwind CSS](https://tailwindcss.com/) | ^4.x | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | ^12.40.0 | Animations & transitions |
| [React Icons](https://react-icons.github.io/react-icons/) | ^5.6.0 | Icon set (Feather icons via `fi`) |
| [ESLint](https://eslint.org/) | ^9.x | Linting |

---

## 🎨 Design Tokens

Defined in `src/app/globals.css` under the `@theme` block:

### Colors

| Token | Hex | Usage |
|---|---|---|
| `navy-950` | `#040910` | Primary page background |
| `navy-900` | `#081220` | Card & section backgrounds |
| `navy-800` | `#0b192c` | Primary Deep Navy |
| `gold-400` | `#c5a880` | Primary Gold Accent (borders, icons, highlights) |
| `slate-100` | `#f1f5f9` | Body text |
| `slate-400` | `#94a3b8` | Muted/secondary text |

### Typography
- **Body font:** `Inter` — variable `--font-inter`, loaded via `next/font/google`
- **Heading font:** `Outfit` — variable `--font-outfit`, loaded via `next/font/google`

### Custom Utilities
- `.text-gold-gradient` — Tri-stop gold gradient clipped to text fill
- `.glass-card` — Light frosted glass card (`rgba(255,255,255,0.7)`, `blur(12px)`)
- `.glass-card-dark` — Dark frosted glass card (navy base, `blur(12px)`)
- `.logo-animate` — Subtle 4s pulsing scale animation on the SVG logo

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18.x or later
- **npm** v9.x or later

### Installation

```bash
# Clone the repository
git clone https://github.com/Galvinmariaalversa/buildcraft-landing-page.git

# Navigate into the project directory
cd buildcraft-landing-page

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

---

## 📋 Navigation Structure

The navbar includes the following anchor links (single-page application):

| Label | Target |
|---|---|
| Home | `/` |
| Services | `#services` |
| Projects | `#projects` |
| About | `#about` |
| Contact | `#contact` |

The navbar is **scroll-aware** — it transitions from transparent to a frosted `navy-900/90` background with a backdrop blur once the user scrolls past 20px.

---

## 📬 Contact Form Fields

The contact form (`Contact.tsx`) includes real-time field-level validation:

| Field | Input Type | Validation Rule |
|---|---|---|
| Full Name | `text` | Required, non-empty |
| Email Address | `email` | Must match email regex |
| Phone Number | `tel` | 7–20 digits, supports `+`, spaces, dashes, parentheses |
| Project Type | `select` | Residential / Commercial / Renovation / Interior / Other |
| Budget Range | `select` | Under $100K / $100K–$500K / $500K–$2M / $2M–$5M / $5M+ |
| Project Details & Scope | `textarea` | Minimum 10 characters |

On successful submission, an animated success state replaces the form with a confirmation message.

---

## 📦 Portfolio Projects

| Project | Category | Location | Description |
|---|---|---|---|
| The Crestview Villa | Residential | Beverly Hills, CA | 12,000 sq ft luxury estate with infinity pool and smart home automation |
| Apex Plaza Tower | Commercial | Manhattan, NY | 32-story corporate HQ with LEED Gold glazed glass infrastructure |
| The Meridian Residences | Residential | Miami, FL | 45-unit waterfront complex with green rooftops and wind-load engineering |
| Aspen Chalet Renovation | Renovation | Aspen, CO | Full interior transformation with timber framing, smart lighting, and custom stonework |

---

## 🏢 Company Profile (from site content)

| Detail | Value |
|---|---|
| **Company Name** | BuildCraft Constructions |
| **Head Office** | 100 Luxury Avenue, Suite 500, New York, NY 10001 |
| **Phone** | +1 (800) 555-0199 |
| **Email** | info@buildcraft.com |
| **Coordinates** | 40.7128° N, 74.0060° W |
| **Years of Experience** | 25+ |
| **Projects Completed** | 350+ |
| **Happy Clients** | 320+ |
| **Team Members** | 85 |
| **Industry Awards** | 12 |

---

## 🔧 TypeScript Configuration

Path alias configured in `tsconfig.json`:

```json
"paths": {
  "@/*": ["./src/*"]
}
```

**Example usage:** `import Button from "@/components/ui/Button"`

**Compiler target:** `ES2017`  
**Strict mode:** Enabled  
**Module resolution:** `bundler`

---

## 📄 License

This project is for **portfolio / demonstration purposes**. All content, company names, images, and branding are fictional and used for illustrative purposes only.

---

> *Built with precision and a luxury finish — just like BuildCraft constructions.* 🏆
