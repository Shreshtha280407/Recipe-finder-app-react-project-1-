import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [ingredient, setIngredient] = useState("");

  const handleSubmit = () => {
    if (!ingredient.trim()) return;
    onSearch(ingredient);
    setIngredient("");
  };

  return (
    <div className="flex gap-4 mb-6">
      <input
        type="text"
        placeholder="Search recipes..."
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        className="px-4 py-2 w-64 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
      />

      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;