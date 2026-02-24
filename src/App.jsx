import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import RecipeModal from "./components/RecipeModal";
import FavoritesPage from "./pages/FavoritesPage";
import Contact from "./pages/Contact";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dark, setDark] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const recipesPerPage = 6;

//   // Load favorites from localStorage
  useEffect(() => {
  const lastSearch = localStorage.getItem("lastSearch");

  if (lastSearch) {
    if (lastSearch.startsWith("category:")) {
      const category = lastSearch.split(":")[1];
      fetchRecipes(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
    } else {
      fetchRecipes(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${lastSearch}`
      );
    }
  } else {
    fetchRecipes(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
  }
}, []);

  // Fetch recipes
  const fetchRecipes = async (url) => {
    try {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();

      setRecipes(data.meals || []);
      setCurrentPage(1); // reset page when new search
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  };

  // Search by name
  const handleIngredientSearch = (searchTerm) => {
  if (!searchTerm) return;
  localStorage.setItem("lastSearch", searchTerm);
  fetchRecipes(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
  );
};

  // Filter by category
  const handleCategoryFilter = (category) => {
    localStorage.setItem("lastSearch", `category:${category}`);
    fetchRecipes(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
  };

  // Toggle favorite
  const toggleFavorite = (recipe) => {
    const exists = favorites.find((f) => f.idMeal === recipe.idMeal);

    if (exists) {
      setFavorites(favorites.filter((f) => f.idMeal !== recipe.idMeal));
    } else {
      setFavorites([...favorites, recipe]);
    }
  };

  // Pagination logic
  const indexOfLast = currentPage * recipesPerPage;
  const indexOfFirst = indexOfLast - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirst, indexOfLast);

  return (
    <BrowserRouter>
      <div className={`${dark ? "bg-gray-900 text-white" : "bg-gray-100"} min-h-screen`}>

        <Navbar
          dark={dark}
          setDark={setDark}
          favoritesCount={favorites.length}
        />

        <div className="p-6">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />

            <Route
              path="/home"
              element={
                <Home
                  recipes={recipes}               // full list
                  currentRecipes={currentRecipes} // sliced list
                  loading={loading}
                  handleIngredientSearch={handleIngredientSearch}
                  handleCategoryFilter={handleCategoryFilter}
                  toggleFavorite={toggleFavorite}
                  favorites={favorites}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  recipesPerPage={recipesPerPage}
                  setSelectedRecipe={setSelectedRecipe}
                />
              }
            />

            <Route
  path="/favorites"
  element={
    <FavoritesPage
      favorites={favorites}
      toggleFavorite={toggleFavorite}
      setSelectedRecipe={setSelectedRecipe}
    />
  }
/>
            <Route path="/contact" element={<Contact />} />
          </Routes>

          {selectedRecipe && (
            <RecipeModal
              id={selectedRecipe}
              onClose={() => setSelectedRecipe(null)}
            />
          )}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;