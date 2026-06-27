# cinerooom-client

Vue 3 frontend for Cinerooom — a streaming catalog app.

## Tech Stack

- **Vue 3** + Vue Router 4
- **Tailwind CSS 4** + tw-animate-css
- **Shadcn-Vue** (Reka UI) + class-variance-authority
- **Biome** — linter & formatter
- **Vite 6**

## Project Setup

```bash
npm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Preview Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

### Format

```bash
npm run format
```

## Project Structure

```
src/
├── assets/
│   └── tailwind.css        # Global styles & CSS variables
├── components/
│   ├── catalog-title/      # CatalogTitle component
│   ├── login/              # Auth form components (login, register, forgot/redefine password)
│   ├── Footer.vue
│   ├── Layout.vue
│   └── MoviesSection.vue
├── lib/
│   └── utils.js            # Shared utilities (cn helper)
├── models/
│   ├── catalog/            # MainCatalog, MoviesCatalog, SeriesCatalog
│   ├── footer/             # FooterModel
│   └── navbar/             # NavBar
├── router/
│   └── index.js
├── views/
│   └── pages/
│       ├── auth/           # Login, Register, ForgotPassword, RedefinePassword
│       ├── HomeView.vue
│       ├── Movies.vue
│       ├── Series.vue
│       └── AboutView.vue
├── App.vue
└── main.js
```
