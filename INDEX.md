# Complete File Index

Quick reference for all files in the portfolio template.

## 📖 Documentation Files (Start Here!)

| File | Purpose | Read This If... |
|------|---------|-----------------|
| [README.md](README.md) | Complete documentation | You want full details |
| [GETTING_STARTED.md](GETTING_STARTED.md) | 5-minute quick start | You want to start fast |
| [SETUP.md](SETUP.md) | Detailed setup guide | You need step-by-step help |
| [CUSTOMIZATION.md](CUSTOMIZATION.md) | Quick customization reference | You want to change things |
| [FILE_STRUCTURE.md](FILE_STRUCTURE.md) | Project structure explained | You want to understand organization |
| [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) | Design system guide | You want to understand design |
| [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) | Project overview | You want the big picture |
| [INDEX.md](INDEX.md) | This file | You want a file reference |

## 🎯 Content Files (EDIT THESE!)

### Primary Content File
| File | What It Contains |
|------|------------------|
| [data/portfolio.ts](data/portfolio.ts) | **ALL portfolio content** - personal info, experience, projects, blog posts, skills |

### Assets to Add
| Location | What to Add |
|----------|-------------|
| `public/resume.pdf` | Your resume PDF |
| `public/projects/*.jpg` | Project screenshots |

## 🏗️ App Structure (Next.js)

### Pages & Layouts
| File | Purpose |
|------|---------|
| [app/layout.tsx](app/layout.tsx) | Root layout with fonts and theme |
| [app/page.tsx](app/page.tsx) | Homepage (assembles all sections) |
| [app/globals.css](app/globals.css) | Global styles and CSS variables |

## 🧩 Components

### Layout Components
| File | Purpose |
|------|---------|
| [components/layout/Header.tsx](components/layout/Header.tsx) | Sticky header with navigation |

### Section Components (Main Content)
| File | What It Shows |
|------|---------------|
| [components/sections/Hero.tsx](components/sections/Hero.tsx) | Hero with animated job titles |
| [components/sections/Experience.tsx](components/sections/Experience.tsx) | Work experience timeline |
| [components/sections/Projects.tsx](components/sections/Projects.tsx) | Project grid with hover effects |
| [components/sections/Blog.tsx](components/sections/Blog.tsx) | Blog posts list |
| [components/sections/Skills.tsx](components/sections/Skills.tsx) | Skills by category |
| [components/sections/Footer.tsx](components/sections/Footer.tsx) | Footer with social links |

### UI Components (Reusable)
| File | Purpose |
|------|---------|
| [components/ui/Button.tsx](components/ui/Button.tsx) | Animated button component |
| [components/ui/ThemeToggle.tsx](components/ui/ThemeToggle.tsx) | Dark/light mode toggle |
| [components/ui/SectionHeading.tsx](components/ui/SectionHeading.tsx) | Section title component |

### Provider Components
| File | Purpose |
|------|---------|
| [components/providers/ThemeProvider.tsx](components/providers/ThemeProvider.tsx) | Theme context provider |

## 📚 Library Files

| File | Purpose |
|------|---------|
| [lib/figmaAnimations.ts](lib/figmaAnimations.ts) | Framer Motion animation variants |
| [lib/analytics.ts](lib/analytics.ts) | Page view tracking utilities |

## ⚙️ Configuration Files

| File | Purpose |
|------|---------|
| [package.json](package.json) | Dependencies and scripts |
| [tsconfig.json](tsconfig.json) | TypeScript configuration |
| [tailwind.config.ts](tailwind.config.ts) | Tailwind CSS configuration |
| [next.config.ts](next.config.ts) | Next.js configuration |
| [postcss.config.mjs](postcss.config.mjs) | PostCSS configuration |
| [.eslintrc.json](.eslintrc.json) | ESLint configuration |
| [.gitignore](.gitignore) | Git ignore rules |
| [.env.example](.env.example) | Environment variables template |

---

## 🎯 Quick Navigation by Task

### "I want to add my content"
1. Edit [data/portfolio.ts](data/portfolio.ts)
2. Add resume to `public/resume.pdf`
3. Add images to `public/projects/`

### "I want to change colors"
1. Edit [app/globals.css](app/globals.css) (CSS variables)
2. Or edit [tailwind.config.ts](tailwind.config.ts) (theme)

### "I want to remove a section"
1. Edit [app/page.tsx](app/page.tsx)
2. Comment out or delete the section component

### "I want to customize animations"
1. Edit [lib/figmaAnimations.ts](lib/figmaAnimations.ts)
2. Or edit individual components

### "I want to understand the design"
1. Read [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md)
2. Review [app/globals.css](app/globals.css)

### "I want to add a new section"
1. Create file in `components/sections/`
2. Import in [app/page.tsx](app/page.tsx)
3. Add content to [data/portfolio.ts](data/portfolio.ts) if needed

### "I want to deploy"
1. Read deployment section in [README.md](README.md)
2. Push to GitHub
3. Deploy on Vercel or Netlify

---

## 📊 File Statistics

```
Total Files:         30
Documentation:        8 files
Components:          12 files
Configuration:        8 files
Library/Utils:        2 files
Content:              1 file (portfolio.ts)
```

## 🗂️ Component Hierarchy

```
app/page.tsx (Main)
├── Header
│   └── ThemeToggle
├── Hero
│   └── Button (×3)
├── Experience
│   └── SectionHeading
├── Projects
│   └── SectionHeading
├── Blog
│   └── SectionHeading
├── Skills
│   └── SectionHeading
└── Footer
```

## 📦 Dependency Overview

```json
{
  "framework": "Next.js 15",
  "language": "TypeScript",
  "styling": "Tailwind CSS",
  "animations": "Framer Motion",
  "theme": "next-themes",
  "icons": "Lucide React",
  "fonts": "Google Fonts"
}
```

## 🎨 Style System Files

| Aspect | File |
|--------|------|
| Colors | [app/globals.css](app/globals.css) |
| Typography | [app/layout.tsx](app/layout.tsx) (fonts), [tailwind.config.ts](tailwind.config.ts) |
| Spacing | [tailwind.config.ts](tailwind.config.ts) |
| Animations | [lib/figmaAnimations.ts](lib/figmaAnimations.ts) |

## 🔄 Data Flow

```
data/portfolio.ts (source)
        ↓
components/sections/* (consumers)
        ↓
app/page.tsx (assembler)
        ↓
Browser (rendered)
```

## 🎓 Learning Path

Recommended reading order:

1. **Start Here**: [GETTING_STARTED.md](GETTING_STARTED.md) (5 min)
2. **Edit Content**: [data/portfolio.ts](data/portfolio.ts) (10 min)
3. **Understand Structure**: [FILE_STRUCTURE.md](FILE_STRUCTURE.md) (5 min)
4. **Customize**: [CUSTOMIZATION.md](CUSTOMIZATION.md) (as needed)
5. **Deep Dive**: [README.md](README.md) (when you need details)
6. **Design Reference**: [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) (optional)

## 💡 Pro Tips

1. **Start with content**: Edit `data/portfolio.ts` first
2. **Test frequently**: Run `npm run dev` and check changes
3. **One change at a time**: Easier to debug
4. **Use TypeScript errors**: They help catch mistakes
5. **Check documentation**: Most questions are answered in the docs

## 🆘 Common File Locations

### "Where do I edit my name?"
→ [data/portfolio.ts](data/portfolio.ts) (line ~51)

### "Where do I change colors?"
→ [app/globals.css](app/globals.css) (lines 5-30)

### "Where do I add projects?"
→ [data/portfolio.ts](data/portfolio.ts) (lines ~100-200)

### "Where do I change animations?"
→ [lib/figmaAnimations.ts](lib/figmaAnimations.ts) or individual components

### "Where do I remove the blog section?"
→ [app/page.tsx](app/page.tsx) (comment out `<Blog />`)

---

## ✅ Checklist Format

Use this when setting up:

```markdown
Content:
- [ ] Edit data/portfolio.ts
- [ ] Add resume.pdf to public/
- [ ] Add project images to public/projects/

Customization:
- [ ] Change accent color (optional)
- [ ] Adjust fonts (optional)
- [ ] Remove unused sections

Testing:
- [ ] Test on desktop
- [ ] Test on mobile
- [ ] Test dark mode
- [ ] Check all links

Deploy:
- [ ] Push to GitHub
- [ ] Deploy to Vercel/Netlify
- [ ] Test live site
```

---

## 📚 External Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Need help finding something?** Use your code editor's search (Ctrl/Cmd + Shift + F) to search across all files.
