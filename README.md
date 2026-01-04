# Home Page - Standalone Project

A simplified Next.js project containing just the home page component.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Personal Information

Edit `components/Home.tsx` and update:

1. **Social Links** (lines ~80-84):
   - GitHub URL
   - LinkedIn URL
   - Email address

2. **Text Content**:
   - Role badge text (line ~93)
   - Main title (line ~110)
   - Subtitle (line ~121)
   - Code block content (lines ~162-179)

3. **Skills Array** (lines ~28-38):
   - Add/remove skills
   - Update skill icons if needed

4. **Code Block Values**:
   - Name in code block
   - Role in code block
   - Passion statement

### Update Styling

- Edit `app/globals.css` for color scheme
- Edit `tailwind.config.js` for theme customization

## Project Structure

```
home-page/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page route
│   └── globals.css      # Global styles
├── components/
│   └── Home.tsx         # Home component
├── public/
│   └── svgs/            # SVG icons
└── package.json
```

## Dependencies

- **Next.js 14** - React framework
- **React 18** - UI library
- **framer-motion** - Animations
- **lucide-react** - Icons
- **Tailwind CSS** - Styling
- **react-particles** - Background particle animations
- **tsparticles-engine** - Particle engine
- **tsparticles-slim** - Lightweight particle bundle

## Notes

- This is a standalone version without i18n
- All text is hardcoded (no translations)
- No external dependencies on other components
- Minimal configuration for easy customization
- Includes background particle animation (always enabled)


