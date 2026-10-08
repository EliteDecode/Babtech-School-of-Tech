# Babtech School of Technology — Website

This is the official website for Babtech School of Technology (BST), a technology school offering hands-on courses for people starting or growing a career in tech. The site helps prospective students explore programmes, apply for admission and keep up with school news and events.

## Business idea

A school's website is its front door: most prospective students decide whether to apply after browsing it. The BST website is built to turn visitors into applicants and to keep current students informed:

- **Explore** — academics, departments and individual courses with clear details.
- **Apply** — admission information and an online application flow, protected by reCAPTCHA.
- **Stay informed** — news, events, an academic calendar and a photo gallery.
- **Build trust** — document verification for certificates issued by the school.

## Key features

- Home page with banners, highlights and animations
- About, academics and admission pages
- Course list and single course pages
- Department pages
- News and single news pages
- Events and single event pages
- Academic calendar
- Photo gallery with image viewer
- Contact page with a map
- Document verification report
- reCAPTCHA on forms

## Tech stack

- React (Create React App) with Redux Toolkit
- React Router
- Material UI, Ant Design and Flowbite (Tailwind CSS)
- Axios for API calls
- AOS animations, react-scroll, react-simple-maps
- React Toastify

## Getting started

```bash
npm install
npm start        # http://localhost:3000
npm run build
```

Create a `.env` file with:

| Variable | Purpose |
|---|---|
| `REACT_APP_API_URL` | URL of the BST backend API |
