# Guganesh R — Portfolio (React + Vite)

## Run locally
```
npm install
npm run dev
```
Open the printed local URL (usually http://localhost:5173).

## Build for production
```
npm run build
```
Output goes to `dist/` — this is what you deploy.

## Things to replace before publishing

1. **Your real photo** — replace `public/profile-cutout.png` with your own cutout photo
   (a transparent-background PNG works best — use remove.bg or Photoshop to cut yourself out).
   Keep the filename the same, or update `photo` in `src/data/resumeData.js`.

2. **Your resume PDF** — add your actual resume file as `public/resume.pdf` (same filename).
   The "Resume" button in the navbar and the "View Resume" button on the home section both
   link to `/resume.pdf` automatically once that file exists.

3. **Check all the content** — everything (about text, credentials, skills, projects, contact
   links) lives in one file: `src/data/resumeData.js`. Edit text there, no need to touch any
   component file.

## Deploy for free (same pattern as your other site)

1. Push this project to a GitHub repo.
2. Go to [vercel.com](https://vercel.com) → sign in with GitHub → **Add New → Project** →
   import this repo.
3. Vercel auto-detects Vite — just click **Deploy**.
4. You'll get a live URL like `https://your-portfolio.vercel.app`.

That URL is what you put as the hyperlinked "Portfolio" word on your resume.
