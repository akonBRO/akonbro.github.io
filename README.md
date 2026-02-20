# Portfolio Website

A modern, responsive developer portfolio built with HTML, CSS, and JavaScript.

## 📁 Folder Structure

```
/
├── index.html          # Main portfolio page
├── projects.html       # All projects page
├── data.js             # ALL CONTENT - Edit this file to update your portfolio
├── public/             # Assets folder
│   ├── me.jpg          # Your profile photo (place here)
│   └── resume.pdf      # Your resume (place here)
└── README.md           # This file
```

## 📝 How to Edit Your Portfolio

**ALL content is managed through `data.js`.** You don't need to touch the HTML files!

### 1. Profile Information
```javascript
profile: {
  name: "Your Name",
  role: "Your Role",
  email: "your@email.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
  avatar: "public/me.jpg",      // Place your photo in public folder
  resume: "public/resume.pdf"   // Place your resume in public folder
}
```

### 2. Add/Edit Projects
```javascript
projects: [
  {
    title: "Project Name",
    timeline: "Jan 2024 – Dec 2024",
    category: "web",  // Options: "ml", "web", "robotics", "other"
    categoryLabel: "Web",
    bullets: [
      "What the project does",
      "Your contributions"
    ],
    stack: ["React", "Node.js", "MongoDB"],
    links: [
      { label: "GitHub", href: "https://github.com/...", type: "github" },
      { label: "Live", href: "https://...", type: "live" }
    ]
  }
]
```

### 3. Add/Edit Experience
```javascript
experience: [
  {
    period: "Jan 2024 – Present",
    role: "Job Title",
    org: "Company Name",
    bullets: [
      "What you did",
      "Your achievements"
    ]
  }
]
```

### 4. Add/Edit Education
```javascript
education: [
  {
    year: "2020 – 2024",
    degree: "B.Sc. in Computer Science",
    school: "University Name",
    note: "CGPA: 3.50 / 4.00"  // Optional
  }
]
```

### 5. Add/Edit Skills
```javascript
skills: [
  {
    category: "Frontend",
    icon: "globe",  // Options: "globe", "server", "brain", "code"
    tags: ["React", "Vue", "Angular"]
  }
]
```

### 6. Add/Edit Certifications
```javascript
certifications: [
  {
    issuer: "Coursera",
    title: "Course Name",
    date: "Jan 2024",
    link: {
      label: "Verify",
      href: "https://..."
    }
  }
]
```

### 7. Add/Edit Achievements
```javascript
achievements: [
  {
    category: "tech",  // Options: "tech", "sports"
    title: "Award Name",
    issuer: "Organization",
    date: "Jan 2024"
  }
]
```

### 8. Add/Edit Leadership
```javascript
leadership: [
  {
    org: "Club Name",
    roles: [
      { title: "President", period: "2023 – 2024" }
    ],
    bullets: ["What you did"]
  }
]
```

### 9. Add/Edit Volunteering
```javascript
volunteering: [
  {
    org: "Organization Name",
    role: "Volunteer",
    period: "Jan 2024 · 1 month",
    icon: "users"  // Options: "users", "monitor", "home", "graduation"
  }
]
```

## 🖼️ Adding Your Photo

1. Rename your profile photo to `me.jpg`
2. Place it in the `public/` folder
3. The website will automatically display it in the About section

## 📄 Adding Your Resume

1. Rename your resume to `resume.pdf`
2. Place it in the `public/` folder
3. Update the link in `data.js` if needed

## 📱 Mobile Responsiveness

The website is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

Features:
- Touch-friendly navigation
- Hamburger menu on mobile
- Optimized cursor (hidden on touch devices)
- Reduced motion support for accessibility

## 🎨 Customization

### Colors
Edit the CSS variables in both HTML files:
```css
:root {
  --bg: #060b18;           /* Background */
  --surface: #0b1228;      /* Card background */
  --accent: #3cffa0;       /* Primary accent (green) */
  --accent2: #38bdf8;      /* Secondary accent (blue) */
  --amber: #fbbf24;        /* Tertiary accent (yellow) */
  --text: #dce9f8;         /* Main text */
  --muted: #4e6580;        /* Muted text */
}
```

### Terminal Content
Edit the `terminal` section in `data.js` to customize the command palette content.

## 🚀 Deployment

Simply upload all files to your web server or hosting platform:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting

## ⚡ Performance Tips

1. Optimize your `me.jpg` image (recommended: 400x400px, < 100KB)
2. Compress your `resume.pdf` if large
3. The site uses no external dependencies except Google Fonts

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Reduced motion preference support
- High contrast text

---

**Need help?** Just edit `data.js` and refresh your browser - changes appear instantly!
