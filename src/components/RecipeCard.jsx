import React from "react";

function RecipeCard({ recipe, onClick, toggleFavorite, isFavorite }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden 
                    hover:shadow-2xl hover:-translate-y-1 
                    transition-all duration-300">

      {/* Image */}
      <div className="relative">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-56 object-cover"
        />

        {/* Favorite Button Overlay */}
        <button
          onClick={() => toggleFavorite(recipe)}
          className={`absolute top-3 right-3 text-2xl transition ${
            isFavorite ? "text-red-500 scale-110" : "text-white"
          }`}
        >
          ❤️
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="text-lg font-bold text-gray-800 truncate">
          {recipe.strMeal}
        </h2>

        <button
          onClick={onClick}
          className="mt-4 text-blue-600 hover:text-blue-800 font-semibold"
        >
          View Details →
        </button>
      </div>
    </div>
  );
}

export default RecipeCard;