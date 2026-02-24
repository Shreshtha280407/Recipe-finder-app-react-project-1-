import React from "react";

const FavoritesCounter = ({ count }) => {
  return (
    <div className="relative flex items-center cursor-pointer">
      <span className="text-2xl">❤️</span>

      {count > 0 && (
        <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
          {count}
        </span>
      )}
    </div>
  );
};

export default FavoritesCounter;