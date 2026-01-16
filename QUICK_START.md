# ⚡ Quick Start - Get Running in 60 Seconds

The absolute fastest way to get your portfolio running.

## Step 1: Install (30 seconds)

```bash
cd data-engineer-portfolio
npm install
```

## Step 2: Run (10 seconds)

```bash
npm run dev
```

## Step 3: Open (5 seconds)

Go to: **http://localhost:3000**

🎉 **Done!** Your portfolio is running!

---

## First Edit - Your Name (2 minutes)

1. Open: `data/portfolio.ts`
2. Find line 51: `name: "Your Name"`
3. Change to: `name: "John Doe"` (your name)
4. Save
5. See it update in the browser!

---

## Essential Edits (10 minutes)

Open `data/portfolio.ts` and change:

```typescript
// Line 51 - Your name
name: "Your Actual Name",

// Line 52 - Job titles (keep 3-5)
jobTitles: [
  "Data Engineer",
  "Your Title Here",
],

// Line 56 - Your email
email: "your.real.email@example.com",

// Line 60-62 - Your links
githubUrl: "https://github.com/yourusername",
linkedinUrl: "https://linkedin.com/in/yourusername",
```

Save and watch it update!

---

## Next Steps (Optional)

### Add Your Work Experience

Scroll to line ~70 in `data/portfolio.ts`:

```typescript
export const experiences: Experience[] = [
  {
    company: "Your Company",
    role: "Your Role",
    period: "2022 - Present",
    description: "What you did",
    impact: ["Achievement 1", "Achievement 2"],
    technologies: ["Tech1", "Tech2"],
  },
];
```

### Add Your Projects

Scroll to line ~120 in `data/portfolio.ts`:

```typescript
export const projects: Project[] = [
  {
    title: "Your Project",
    description: "What it does",
    technologies: ["Tech1", "Tech2"],
    githubUrl: "https://github.com/...",
  },
];
```

---

## Deploy (5 minutes)

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Click "Deploy"

Done! You'll get a live URL.

---

## File Locations Quick Reference

```
Edit content:     data/portfolio.ts
Change colors:    app/globals.css
Add resume:       public/resume.pdf
Add images:       public/projects/
```

---

## Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Check for errors
npm run lint
```

---

## Need Help?

**Quick answers:**
- [GETTING_STARTED.md](GETTING_STARTED.md) - 5-minute guide
- [CUSTOMIZATION.md](CUSTOMIZATION.md) - How to customize

**Detailed help:**
- [README.md](README.md) - Full documentation
- [SETUP.md](SETUP.md) - Detailed setup
- [INDEX.md](INDEX.md) - File reference

---

## Troubleshooting

### "npm: command not found"
Install Node.js from [nodejs.org](https://nodejs.org)

### "Port 3000 already in use"
```bash
npm run dev -- -p 3001
```

### "Module not found"
```bash
npm install
```

### Changes not showing
1. Save the file
2. Wait 2 seconds
3. Refresh browser

---

## What You Should See

After following the steps above, you should see:

✅ A dark-themed portfolio page
✅ Your name in the hero section
✅ Animated job titles cycling
✅ Experience, Projects, Blog, Skills sections
✅ A theme toggle in the top right
✅ Smooth animations throughout

---

## ✅ Ready Checklist

Before you share your portfolio:

```markdown
- [ ] Changed name in portfolio.ts
- [ ] Changed email and links
- [ ] Added at least 2 work experiences
- [ ] Added at least 3 projects
- [ ] Added resume.pdf to public/
- [ ] Tested on mobile (toggle DevTools)
- [ ] Tested dark mode
- [ ] Deployed to Vercel
```

---

## 🎯 Your Goal

Transform the template into YOUR portfolio by:

1. Adding real content (10-30 min)
2. Adding real project images (10 min)
3. Customizing colors if desired (5 min)
4. Deploying (5 min)

**Total time: 30-50 minutes** for a professional portfolio!

---

## 💡 Pro Tips

1. **Edit one section at a time** - Don't try to do everything at once
2. **Keep the dev server running** - See changes instantly
3. **Save frequently** - Changes show up automatically
4. **Use real content** - Don't leave placeholder text
5. **Test early, test often** - Check on mobile and desktop

---

## 🚀 You're Ready!

You now have:
- ✅ Portfolio running locally
- ✅ Know where to edit content
- ✅ Know how to deploy
- ✅ Access to full documentation

**Make it yours and share it with the world!**

---

**Questions?** Check the documentation files in the project root.
