# Setup Guide

Quick guide to get your portfolio up and running.

## Step 1: Install Dependencies

```bash
cd data-engineer-portfolio
npm install
```

## Step 2: Customize Your Content

### Edit Personal Info

Open `data/portfolio.ts` and update:

```typescript
export const personalInfo: PersonalInfo = {
  name: "Your Full Name",
  jobTitles: [
    "Data Engineer",
    "Your Custom Title",
    "Another Title",
  ],
  email: "youremail@example.com",
  resumeUrl: "/resume.pdf",
  githubUrl: "https://github.com/yourusername",
  linkedinUrl: "https://linkedin.com/in/yourusername",
  // ... more fields
};
```

### Add Your Experience

In the same file, scroll to the `experiences` array and replace with your work history:

```typescript
export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "Your Company",
    role: "Your Role",
    period: "Start - End",
    description: "What you did",
    impact: [
      "Achievement 1 with metrics",
      "Achievement 2 with metrics",
    ],
    technologies: ["Tech", "Stack", "Here"],
  },
];
```

### Add Your Projects

Update the `projects` array:

```typescript
export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Project Name",
    description: "Brief description",
    image: "/projects/project1.jpg",  // Add image to public/projects/
    technologies: ["Tech1", "Tech2"],
    githubUrl: "https://github.com/...",
    metrics: ["Key metric", "Another metric"],
  },
];
```

### Add Blog Posts

Update the `blogPosts` array or remove the Blog section from `app/page.tsx` if you don't have a blog.

### Update Skills

Customize the `skills` array with your tech stack.

## Step 3: Add Assets

### Resume

Add your resume PDF to:
```
public/resume.pdf
```

### Project Images

Add project screenshots to:
```
public/projects/
  ├── project1.jpg
  ├── project2.jpg
  └── ...
```

Recommended image dimensions: 1200x800px

## Step 4: Customize Design (Optional)

### Change Colors

Edit `app/globals.css`:

```css
:root {
  --accent: 99 102 241;  /* Change this RGB value */
}
```

### Change Fonts

Edit `app/layout.tsx` to import different Google Fonts.

## Step 5: Run Development Server

```bash
npm run dev
```

Visit http://localhost:3000

## Step 6: Deploy

### Deploy to Vercel

1. Push code to GitHub
2. Go to https://vercel.com
3. Click "New Project"
4. Import your repository
5. Click "Deploy"

### Deploy to Netlify

1. Push code to GitHub
2. Go to https://netlify.com
3. Click "Add new site"
4. Connect your repository
5. Build command: `npm run build`
6. Publish directory: `.next`

## Common Issues

### Port already in use

```bash
# Kill the process or use a different port
npm run dev -- -p 3001
```

### Animations not working

Make sure you've installed all dependencies:
```bash
npm install framer-motion next-themes lucide-react
```

### Images not loading

- Ensure images are in the `public` folder
- Use paths starting with `/` (e.g., `/projects/image.jpg`)
- Supported formats: JPG, PNG, WebP, SVG

### Dark mode not persisting

This is normal on first load. The theme will persist after the first toggle.

## Next Steps

1. Add real project screenshots
2. Write compelling descriptions
3. Add quantifiable metrics to experience
4. Set up real analytics (Vercel Analytics or Google Analytics)
5. Add your actual resume PDF
6. Test on mobile devices
7. Share with the world!

## Need Help?

- Check the main [README.md](README.md) for full documentation
- Review component files for inline comments
- Check Next.js docs: https://nextjs.org/docs
- Check Framer Motion docs: https://www.framer.com/motion/
