# ACC3202 MOOC Vue Project

This site is now a Vue single-page project powered by Vite.

## Edit Carousel Panels

Open `src/data/panels.js`.

The `panels` array contains:

- `Lesson 1`
- `Lesson 2`
- `Lesson 3`
- `Lesson 4`

Change each panel title, schedule/category, summary, image path, and alt text there.

## Edit Each Panel Tabs

Each panel has its own Vue file:

- `src/panels/Lesson1Panel.vue`
- `src/panels/Lesson2Panel.vue`
- `src/panels/Lesson3Panel.vue`
- `src/panels/Lesson4Panel.vue`

Inside each file, edit the `tabs` array to add, remove, reorder, or rewrite tabs and MCQs for that panel.

## Run Locally

```powershell
npm install
npm run dev
```

## Build

```powershell
npm run build
```

Vite writes the GitHub-ready production output to `dist`.

## GitHub Pages

The included workflow in `.github/workflows/deploy.yml` builds and deploys the Vite project with GitHub Actions.

The old root-level `app.js` and `styles.css` files from the earlier static version are not used by this Vue build if they are still present in an older copy of the folder.
