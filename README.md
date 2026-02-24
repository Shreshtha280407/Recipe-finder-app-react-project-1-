#  Recipe Finder App

A modern Recipe Finder web application built using **React + Vite + Tailwind CSS**.  
Users can search recipes, filter by category, add favorites, and view detailed recipe information — all inside a smooth Single Page Application (SPA).

---

##  Features

-  Search recipes by name
-  Filter recipes by category
-  Add / Remove favorites
-  Dark mode toggle
-  Recipe detail modal
-  Client-side pagination
-  Last search saved using localStorage
-  SPA routing using React Router
-  Fast build with Vite

---

##  Tech Stack

- **React** – UI library
- **Vite** – Fast build tool
- **Tailwind CSS** – Utility-first styling
- **React Router DOM** – Client-side routing
- **TheMealDB API** – Recipe data source

---

##  Project Structure
src/
│
├── components/
│ ├── Navbar.jsx
│ ├── RecipeModal.jsx
│
├── pages/
│ ├── Home.jsx
│ ├── FavoritesPage.jsx
│ ├── Contact.jsx
│
├── App.jsx
├── main.jsx
├── index.css


---

##  Key Concepts Used

- React Hooks (`useState`, `useEffect`)
- Conditional Rendering
- Props & State Management
- Client-Side Routing
- API Fetching using async/await
- Pagination Logic
- Local Storage Persistence
- Dark Mode using Tailwind

---

##  How Routing Works

- `/home` → Home Page
- `/favorites` → Favorites Page
- `/contact` → Contact Page
- `/` → Redirects to `/home`

---

##  API Used

Data is fetched from:

**TheMealDB API**  
https://www.themealdb.com/api.php

---

##  Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repo-name.git
