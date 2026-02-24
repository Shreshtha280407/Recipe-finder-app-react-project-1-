// import React from "react";
// import SearchBar from "../components/SearchBar";
// import CategoryFilter from "../components/CategoryFilter";
// import RecipeCard from "../components/RecipeCard";
// import Loader from "../components/Loader";
// import Pagination from "../components/Pagination";

// function Home({
//   recipes,
//   loading,
//   handleIngredientSearch,
//   handleCategoryFilter,
//   toggleFavorite,
//   favorites,
//   currentPage,
//   setCurrentPage,
//   recipesPerPage,
//   setSelectedRecipe,
// }) {
//   return (
//     <div className="max-w-7xl mx-auto space-y-10">

//       {/* Search + Category Section */}
//       <div className="space-y-6 text-center">
//         <SearchBar onSearch={handleIngredientSearch} />
//         <CategoryFilter onSelect={handleCategoryFilter} />
//       </div>

//       {/* Loader or Recipes */}
//       {loading ? (
//         <Loader />
//       ) : (
//         <>
//           {/* Recipes Grid */}
//           {recipes.length === 0 ? (
//             <p className="text-center text-gray-500">
//               No recipes found. Try searching something 🍳
//             </p>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//               {recipes.map((recipe) => (
//                 <RecipeCard
//                   key={recipe.idMeal}
//                   recipe={recipe}
//                   onClick={() => setSelectedRecipe(recipe.idMeal)}
//                   toggleFavorite={toggleFavorite}
//                   isFavorite={favorites.some(
//                     (fav) => fav.idMeal === recipe.idMeal
//                   )}
//                 />
//               ))}
//             </div>
//           )}

//           {/* Pagination */}
//           {recipes.length > recipesPerPage && (
//             <div className="pt-6">
//               <Pagination
//                 total={recipes.length}
//                 perPage={recipesPerPage}
//                 current={currentPage}
//                 setCurrent={setCurrentPage}
//               />
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }

// export default Home;


import React from "react";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import RecipeCard from "../components/RecipeCard";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";

function Home({
  recipes,
  currentRecipes,
  loading,
  handleIngredientSearch,
  handleCategoryFilter,
  toggleFavorite,
  favorites,
  currentPage,
  setCurrentPage,
  recipesPerPage,
  setSelectedRecipe,
}) {
  return (
    <div className="max-w-7xl mx-auto space-y-10">

      <div className="space-y-6 text-center">
        <SearchBar onSearch={handleIngredientSearch} />
        <CategoryFilter onSelect={handleCategoryFilter} />
      </div>

      {loading ? (
        <Loader />
      ) : (
        <>
          {recipes.length === 0 ? (
            <p className="text-center text-gray-500">
              No recipes found. Try searching something 🍳
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentRecipes.map((recipe) => (
                <RecipeCard
                  key={recipe.idMeal}
                  recipe={recipe}
                  onClick={() => setSelectedRecipe(recipe.idMeal)}
                  toggleFavorite={toggleFavorite}
                  isFavorite={favorites.some(
                    (fav) => fav.idMeal === recipe.idMeal
                  )}
                />
              ))}
            </div>
          )}

          {recipes.length > recipesPerPage && (
            <div className="pt-6">
              <Pagination
                total={recipes.length}
                perPage={recipesPerPage}
                current={currentPage}
                setCurrent={setCurrentPage}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Home;