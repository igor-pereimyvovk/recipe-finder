# 🍽️ Recipe Finder App

A Next.js application that allows users to search for recipes with filters, view results, and read detailed information about each recipe. Built with the Spoonacular API and styled using Tailwind CSS.

## 🚀 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/your-username/recipe-finder-app.git
cd recipe-finder-app
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Start the development server**

```bash
npm run dev
pnpm run dev
```

## 🏗 Features
- Search for recipes using query, cuisine type, or preparation time

- View recipe results with images and titles

- Open recipe details with ingredients, summary, and prep info

- API response caching (1 minute)

- Styled with Tailwind CSS and shadcn/ui

- Loading states handled with React Suspense

- Error handling

## Project Structure
- /app – route handlers and pages

- /shared – types, API instance, and utility functions

- /features – isolated UI logic like the search form

## 🧪 Code Quality
- ESLint and Prettier configured

- Run npm run lint to check for lint issues

- Run npm run format to auto-format code
