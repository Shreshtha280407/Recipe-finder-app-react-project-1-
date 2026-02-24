 import React from "react";
 function CategoryFilter({ onSelect }) {
  const categories = ["Vegetarian", "Seafood", "Dessert", "Chicken"];

  return (
    <div className="flex gap-4 mt-4 justify-center">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className="bg-green-700 text-white px-3 py-1 rounded"
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
export default CategoryFilter;