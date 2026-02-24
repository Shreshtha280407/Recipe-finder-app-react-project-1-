import React, { useEffect, useState } from "react";

function RecipeModal({ id, onClose }) {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    setLoading(true);

    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.meals) {
          setRecipe(data.meals[0]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching recipe:", err);
        setLoading(false);
      });
  }, [id]);

  if (!id) return null;

  return (
     <div
      className="fixed inset-0 backdrop-blur-md bg-black/30 flex justify-center items-center z-50"
       onClick={onClose}
     >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[85vh] overflow-y-auto p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-500 text-xl font-bold"
        >
          ✕
        </button>

        {loading ? (
          <p className="text-center py-10">Loading...</p>
        ) : recipe ? (
          <>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              {recipe.strMeal}
            </h2>

            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />

            <p className="text-gray-700 whitespace-pre-line leading-relaxed">
              {recipe.strInstructions}
            </p>
          </>
        ) : (
          <p className="text-center text-gray-500">Recipe not found.</p>
        )}
      </div>
    </div>
  );
}

export default RecipeModal;
