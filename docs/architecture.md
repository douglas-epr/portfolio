# Architecture — Douglas Gouveia Portfolio

## 1. Data Entities (Mock)

All entities below are TypeScript interfaces defined in `/src/types/index.ts`
and instantiated as static arrays in `/src/data/*.ts`.

---

### 1.1 Person (singleton)

```ts
interface Person {
  name: string;               // "Douglas Gouveia"
  title: string;              // "AI Product Engineer"
  subtitle: string;           // "Senior Certified Bubble Developer · Product & Operations Manager"
  bio: string;                // Professional summary paragraph
  location: string;           // "Ervália, MG, Brazil"
  email: string;              // "douglas.epr@hotmail.com"
  phone: string;              // "+55 (32) 98511-3997"
  linkedinUrl: string;
  youtubeUrl: string;         // "@dgnocode"
  portfolioUrl: string;
  profilePhoto: string;       // "/images/douglas-profile-1.jpeg"
  heroPhoto: string;          // "/images/douglas-profile-2.jpeg"
}
```

---

### 1.2 Project

```ts
interface Project {
  id: string;
  name: string;
  tagline: string;
  type: ProjectType;           // enum: 'SaaS' | 'Marketplace' | 'Social Network' | 'Management' | 'Other'
  description: string;
  keyFeatures: string[];
  tools: string[];             // e.g. ['Bubble', 'Stripe API', 'OpenAI API']
  websiteUrl?: string;
  youtubeUrl?: string;
  thumbnailImage: string;      // "/images/projects/<id>.png"
  featured: boolean;
}
```

**Seeded projects (7):**

| id              | Name                           | Type           |
|-----------------|--------------------------------|----------------|
| `bellmade`      | Bellmade                       | SaaS           |
| `sales-abx`     | Sales ABX                      | SaaS (CRM)     |
| `bivrost`       | Bivrost                        | Marketplace    |
| `evencourt`     | Evencourt                      | Social Network |
| `blur-pm`       | Blur Studio PM Tool            | Management     |
| `coachfully`    | Coachfully                     | Marketplace    |
| `elysian-blue`  | Elysian Blue                   | Marketplace    |

---

### 1.3 Skill

```ts
interface Skill {
  name: string;
  category: SkillCategory;
  proficiency?: number;         // 0–100, optional — shown as progress bar
}

type SkillCategory =
  | 'AI Tools'
  | 'NoCode'
  | 'Product'
  | 'Engineering'
  | 'Management'
  | 'Languages';
```

**Seeded skills (from CV):**

- **AI Tools:** Claude Code, Lovable, Figma Make, Make, MCP (Model Context Protocol)
- **NoCode:** Bubble.io (Certified Expert)
- **Product:** Product Architecture, UI/UX Design, Product Management, Agile
- **Engineering:** Database Architecture, API Integrations, Scalability Design
- **Management:** Operations Management, Stakeholder Alignment, OKRs/SOPs
- **Languages:** Portuguese (Native), English (Bilingual)

---

### 1.4 Experience

```ts
interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;           // "Sep 2025"
  endDate: string | 'Present';
  type: 'remote' | 'on-site' | 'hybrid';
  highlights: string[];        // bullet points
  stack?: string[];
}
```

**Seeded entries (newest first):**

| Company               | Role                                          | Period                  |
|-----------------------|-----------------------------------------------|-------------------------|
| Blur Studio           | Operations Manager & Full-Stack AI/No-Code Dev | Sep 2025 – Present     |
| Freelance/Independent | Senior Bubble Developer & AI Product Engineer  | Jan 2022 – Present     |
| Goodspeed             | Bubble Developer                               | Feb 2024 – Sep 2024    |
| Bryan Cassady         | Intern                                         | Jun 2020 – Feb 2022    |
| NTG – UFV / CenTev    | Intern / Project Intern                        | 2011 – 2015            |

---

### 1.5 Education

```ts
interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  startYear: number;
  endYear: number;
}
```

**Seeded entries:**

| Institution                | Degree          | Field                      | Years          |
|----------------------------|-----------------|----------------------------|----------------|
| University of Debrecen     | Master's        | Engineering Management     | 2019 – 2021   |
| Univ. Federal de Viçosa    | Bachelor's      | Production Engineering     | 2010 – 2017   |
| Arizona State University   | Exchange        | Industrial Engineering     | 2014           |
| Rutgers University         | Program         | American Language Studies  | 2013 – 2014   |

---

### 1.6 Service

```ts
interface Service {
  id: string;
  icon: string;               // Lucide icon name
  title: string;
  description: string;
}
```

**Seeded services (derived from CV):**

1. AI Product Engineering — Build scalable apps with Claude Code, Lovable & Bubble
2. NoCode Architecture — Complex Bubble.io systems with enterprise-grade logic
3. Product Strategy — Discovery, playbooks, prototypes, and roadmaps
4. UI/UX Design — Figma Make prototyping to functional, responsive products
5. API Integrations — Connecting systems via robust API connector design
6. Operations Systems — Company OS, SOPs, OKRs, and PM tooling

---

### 1.7 Testimonial

```ts
interface Testimonial {
  id: string;
  author: string;
  role?: string;
  rating: number;             // 1–5
  text: string;
  date?: string;
}
```

Content sourced from visible client reviews in project screenshots.

---

### 1.8 Tutorial

```ts
interface Tutorial {
  id: string;
  youtubeId: string;           // extracted from URL
  title: string;
  description?: string;
  embedUrl: string;            // https://www.youtube.com/embed/<youtubeId>
}
```

**Seeded tutorials (4):**

| # | YouTube ID        | URL                                                |
|---|-------------------|----------------------------------------------------|
| 1 | `7QKx8B0HLkA`    | https://www.youtube.com/watch?v=7QKx8B0HLkA        |
| 2 | `LvJaLzTHYow`    | https://www.youtube.com/watch?v=LvJaLzTHYow&t=206s |
| 3 | `i_gcrD7WVQE`    | https://www.youtube.com/watch?v=i_gcrD7WVQE&t=402s |
| 4 | `oJGy3JcFVc8`    | https://www.youtube.com/watch?v=oJGy3JcFVc8&t=1113s|

Channel: [@dgnocode](https://www.youtube.com/@dgnocode)

---

## 2. Core User Flow

```
[User lands on page]
        │
        ▼
┌──────────────────────────────────────────────────────────┐
│  HERO                                                    │
│  • Photo + Name + "AI Product Engineer" title            │
│  • Animated tagline                                      │
│  • CTA: "View My Work" (→ #projects) | "Contact Me"     │
└──────────────────────────────────────────────────────────┘
        │ scroll
        ▼
┌──────────────────────────────────────────────────────────┐
│  ABOUT ME                                                │
│  • Second photo + personal bio paragraph                 │
│  • Key identity: AI × Engineering × NoCode              │
└──────────────────────────────────────────────────────────┘
        │ scroll
        ▼
┌──────────────────────────────────────────────────────────┐
│  RESUME                                                  │
│  • Two-column: Work Timeline | Education                 │
│  • Each entry expands on hover (Framer Motion)           │
│  • "Download CV" button → /douglas-gouveia-cv.pdf        │
└──────────────────────────────────────────────────────────┘
        │ scroll
        ▼
┌──────────────────────────────────────────────────────────┐
│  SERVICES                                                │
│  • 6 service cards in grid                              │
│  • Icon + title + short description                      │
└──────────────────────────────────────────────────────────┘
        │ scroll
        ▼
┌──────────────────────────────────────────────────────────┐
│  MY SKILLS                                               │
│  • Grouped by category with visual indicators            │
│  • AI Tools highlighted as primary group                 │
└──────────────────────────────────────────────────────────┘
        │ scroll
        ▼
┌──────────────────────────────────────────────────────────┐
│  FEATURED PROJECTS                                       │
│  • Grid of 7 project cards                              │
│  • Card: thumbnail + name + type badge + tool tags       │
│  • Click card → ProjectModal opens (overlay)             │
│    └── Modal: full description, key features,            │
│        tools, links to website + YouTube demo            │
└──────────────────────────────────────────────────────────┘
        │ scroll
        ▼
┌──────────────────────────────────────────────────────────┐
│  WHAT MY CLIENTS SAY                                     │
│  • Testimonial carousel / staggered cards                │
│  • Star rating + quote + author                          │
└──────────────────────────────────────────────────────────┘
        │ scroll
        ▼
┌──────────────────────────────────────────────────────────┐
│  TUTORIALS                                               │
│  • 2×2 grid of YouTube iframes (embed, not link)         │
│  • Title + brief description below each                  │
└──────────────────────────────────────────────────────────┘
        │ scroll
        ▼
┌──────────────────────────────────────────────────────────┐
│  CONTACT ME                                              │
│  • Name / Email / Message form                           │
│  • Submit → preventDefault + success toast (mock)        │
│  • Social links: LinkedIn, YouTube, Email, WhatsApp      │
└──────────────────────────────────────────────────────────┘
        │
        ▼
[FOOTER — name, nav links, copyright]
```

---

## 3. Navigation Behavior

- Sticky top navbar with section links.
- Active section highlighted using `IntersectionObserver` (threshold 0.5).
- Smooth scroll on nav link click (`scroll-behavior: smooth`).
- On mobile: hamburger → slide-in drawer.

---

## 4. Project Modal State Machine

```
idle ──[click card]──► open(project)
open ──[click backdrop | Escape | close btn]──► idle
```

State lives in `page.tsx`:
```ts
const [activeProject, setActiveProject] = useState<Project | null>(null);
```

---

## 5. Design Decisions

| Decision                | Choice                     | Rationale                               |
|-------------------------|----------------------------|-----------------------------------------|
| Color theme             | Dark (near-black bg)       | Matches old portfolio; modern tech feel |
| Accent color            | Electric blue / cyan       | AI/tech connotation; high contrast      |
| Secondary accent        | Amber / gold               | Warm contrast; matches old palette hints|
| Typography              | Inter (sans) + Fira Code   | Clean + code aesthetic for tools section|
| Animation style         | Fade-up on scroll entry    | Modern, non-distracting                 |
| Mobile breakpoint       | 768px (md)                 | Standard Tailwind                       |
| Photo style (hero)      | Full-bleed with overlay    | Dramatic, modern portfolio standard     |

---

## 6. Future Phases (post-mock)

| Phase | What changes                                      |
|-------|---------------------------------------------------|
| 2     | Connect contact form to Supabase (email logging)  |
| 3     | Deploy to Vercel with custom domain               |
| 4     | Add CMS capability (Supabase-backed content edit) |
| 5     | Add analytics (Vercel Analytics or Plausible)     |
