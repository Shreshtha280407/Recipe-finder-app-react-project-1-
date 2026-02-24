import React from "react";
import RecipeCard from "../components/RecipeCard";

function FavoritesPage({ favorites, toggleFavorite, setSelectedRecipe }) {
  return (
    <div className="max-w-7xl mx-auto space-y-10">

      <h2 className="text-3xl font-bold text-center">
        Your Favorite Recipes ❤️
      </h2>

      {favorites.length === 0 ? (
        <p className="text-center text-gray-500">
          You have not added any favorites yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {favorites.map((recipe) => (
            <RecipeCard
              key={recipe.idMeal}
              recipe={recipe}
              onClick={() => setSelectedRecipe(recipe.idMeal)}
              toggleFavorite={toggleFavorite}
              isFavorite={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;