# jpech-portfolio

Personal portfolio site at [jpech.dev](https://jpech.dev), built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## Stack

- **Astro 6** — static site framework with sitemap integration
- **Tailwind CSS v4** — utility-first styling via `@tailwindcss/vite`

## Requirements

- Node.js `>=22.12.0`

## Project Structure

```text
src/
├── components/
│   └── ProjectCard.astro
├── data/
│   └── projects.ts
├── layouts/
│   └── Layout.astro
├── pages/
│   ├── 404.astro
│   ├── index.astro
│   └── projects/
│       ├── index.astro
│       └── [slug].astro
└── styles/
    └── global.css
```

## Redirects

| Path        | Destination                                  |
| :---------- | :------------------------------------------- |
| `/github`   | https://github.com/jpecheverryp             |
| `/linkedin` | https://www.linkedin.com/in/jpechdev/        |

## Commands

| Command           | Action                                   |
| :---------------- | :--------------------------------------- |
| `npm install`     | Install dependencies                     |
| `npm run dev`     | Start dev server at `localhost:4321`     |
| `npm run build`   | Build for production to `./dist/`        |
| `npm run preview` | Preview production build locally         |
