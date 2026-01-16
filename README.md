# Data Engineer Portfolio Template

A polished, magazine-style personal portfolio for Data Engineers. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Magazine/Editorial Layout**: Clean grid system with strong typography
- **Animated Job Titles**: Smooth transitions between multiple titles in the hero section
- **Project Hover Previews**: Interactive project cards with hover snapshot effects
- **Dark/Light Mode**: Persistent theme switching with next-themes
- **Smooth Animations**: Figma-inspired motion design with Framer Motion
- **Data-Driven Content**: All portfolio content managed through TypeScript files
- **Fully Responsive**: Mobile-first design that works on all devices
- **Analytics Ready**: Built-in view tracking (demo mode included)
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

```bash
# Navigate to the project directory
cd data-engineer-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## 📁 Project Structure

```
data-engineer-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with fonts and theme provider
│   ├── page.tsx            # Main homepage
│   └── globals.css         # Global styles and CSS variables
├── components/
│   ├── layout/
│   │   └── Header.tsx      # Sticky header with navigation
│   ├── providers/
│   │   └── ThemeProvider.tsx  # Theme context provider
│   ├── sections/
│   │   ├── Hero.tsx        # Hero section with animated titles
│   │   ├── Experience.tsx  # Timeline-style experience section
│   │   ├── Projects.tsx    # Project grid with hover previews
│   │   ├── Blog.tsx        # Blog/writing section
│   │   ├── Skills.tsx      # Skills grouped by category
│   │   └── Footer.tsx      # Footer with social links
│   └── ui/
│       ├── Button.tsx      # Reusable button component
│       ├── ThemeToggle.tsx # Dark/light mode toggle
│       └── SectionHeading.tsx  # Section header component
├── data/
│   └── portfolio.ts        # All portfolio content (EDIT THIS!)
├── lib/
│   ├── figmaAnimations.ts  # Framer Motion animation variants
│   └── analytics.ts        # Simple page view tracking
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Customization Guide

### 1. Personal Information

Edit [data/portfolio.ts](data/portfolio.ts) to update your personal information:

```typescript
export const personalInfo: PersonalInfo = {
  name: "Your Name",
  jobTitles: [
    "Data Engineer",
    "Analytics Engineer",
    "Building Reliable Data Systems",
  ],
  tagline: "Your tagline here",
  email: "your.email@example.com",
  // ... other fields
};
```

### 2. Experience

Add or modify your work experience in the `experiences` array:

```typescript
export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "Company Name",
    role: "Your Role",
    period: "2022 - Present",
    description: "Brief description of your role",
    impact: [
      "Key achievement 1",
      "Key achievement 2",
    ],
    technologies: ["Tech1", "Tech2", "Tech3"],
  },
  // Add more experiences...
];
```

### 3. Projects

Update the `projects` array with your projects:

```typescript
export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Project Name",
    description: "Short description",
    longDescription: "Detailed description shown on hover",
    image: "/projects/project-image.jpg",
    technologies: ["Tech1", "Tech2"],
    githubUrl: "https://github.com/username/repo",
    liveUrl: "https://project-demo.com",
    metrics: ["10M+ events/sec", "Sub-second latency"],
  },
  // Add more projects...
];
```

### 4. Blog Posts

Add your blog posts to the `blogPosts` array:

```typescript
export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    title: "Post Title",
    excerpt: "Brief excerpt of the post",
    date: "2024-12-15",
    readTime: "8 min read",
    views: 2340,
    slug: "post-slug",
    tags: ["Tag1", "Tag2"],
  },
  // Add more posts...
];
```

### 5. Skills

Organize your skills by category:

```typescript
export const skills: SkillCategory[] = [
  {
    category: "Data Modeling",
    skills: ["Skill 1", "Skill 2", "Skill 3"],
  },
  // Add more categories...
];
```

## 🎨 Design Tokens

### Colors

Edit CSS variables in [app/globals.css](app/globals.css):

```css
:root {
  --background: 255 255 255;
  --foreground: 15 23 42;
  --accent: 99 102 241;
  /* ... other colors */
}
```

### Typography

The template uses:
- **Sans-serif**: Inter (via Google Fonts)
- **Monospace**: JetBrains Mono (via Google Fonts)

Change fonts in [app/layout.tsx](app/layout.tsx).

### Animations

All animations are defined in [lib/figmaAnimations.ts](lib/figmaAnimations.ts). Customize:
- Duration: 0.4–0.7s (recommended)
- Easing curves: Pre-defined in `easing` object
- Variants: fadeIn, slideUp, staggerContainer, etc.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

Build the static export:

```bash
npm run build
npm run start
```

Deploy the `.next` folder to any hosting platform.

## 📊 Analytics

The template includes a demo analytics system using localStorage. For production:

### Option 1: Vercel Analytics

```bash
npm install @vercel/analytics
```

Add to [app/layout.tsx](app/layout.tsx):

```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Option 2: Google Analytics

Add your tracking ID to [app/layout.tsx](app/layout.tsx).

## 🎯 Best Practices

### Content Guidelines

1. **Hero Section**: Keep job titles concise (3-5 words)
2. **Experience**: Focus on impact metrics and data scale
3. **Projects**: Use real screenshots when possible
4. **Blog**: Write posts that demonstrate technical depth
5. **Skills**: Group by category for easier scanning

### Performance

- Optimize images (use WebP format)
- Keep animations subtle and performant
- Use Next.js Image component for automatic optimization
- Lazy load sections below the fold

### Accessibility

- All interactive elements have proper ARIA labels
- Color contrast meets WCAG AA standards
- Keyboard navigation supported
- Screen reader friendly

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Theme**: next-themes
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, JetBrains Mono)

## 📝 Scripts

```bash
# Development
npm run dev          # Start dev server at localhost:3000

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 🤝 Contributing

This is a template project. Feel free to:
- Fork and customize for your own use
- Submit issues for bugs
- Suggest improvements via pull requests

## 📄 License

MIT License - feel free to use this template for your personal portfolio.

## 🙏 Credits

Design inspiration from modern editorial layouts and data engineering aesthetics.

Built with ❤️ for the data engineering community.

---

## 🎨 Customization Checklist

Before deploying, make sure to:

- [ ] Update personal information in `data/portfolio.ts`
- [ ] Add your work experiences
- [ ] Add your projects with images
- [ ] Add blog posts or remove section if not needed
- [ ] Update skills to match your expertise
- [ ] Change color scheme in `globals.css` (optional)
- [ ] Add your resume PDF to `/public/resume.pdf`
- [ ] Update meta tags in `app/layout.tsx`
- [ ] Add project images to `/public/projects/`
- [ ] Set up analytics (Vercel or Google Analytics)
- [ ] Test on mobile devices
- [ ] Check dark mode appearance

---

**Need help?** Check the inline comments in the code or review the component files for detailed documentation.
