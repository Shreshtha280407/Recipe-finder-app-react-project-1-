import React from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import FavoritesCounter from "./FavoritesCounter";

function Navbar({ dark, setDark, favoritesCount }) {
  // Styling for the 4 right-side navigation options
  const linkStyle = "text-gray-400 hover:text-orange-500 transition-all duration-300 text-sm font-semibold uppercase tracking-widest";

  return (
    <nav className="w-full bg-slate-950 text-white shadow-2xl border-b border-slate-800 sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-8 h-24 flex justify-between items-center">
        
        {/* 1. Logo Section (Static - No Link) */}
        <div className="flex items-center gap-3 select-none">
          <div className="bg-orange-500 p-2 rounded-xl shadow-lg shadow-orange-500/20">
            <span className="text-2xl">🍲</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-black tracking-tighter italic">RECIPE</span>
            <span className="text-xs text-orange-500 font-bold tracking-[0.3em] ml-1">FINDER</span>
          </div>
        </div>

        {/* Right Side Container */}
        <div className="flex items-center gap-12">
          
          {/* 4 Navigation Options (Home, Recipes, Favorites, Contact) */}
          <div className="flex items-center gap-10">
            <Link to="/home" className={linkStyle}>Home</Link>
            <Link to="/favorites" className={linkStyle}>Favorites</Link>
            <Link to="/contact" className={linkStyle}>Contact</Link>
          </div>

          {/* Functional Elements (Counter & Toggle) */}
          <div className="flex items-center gap-6 border-l border-slate-800 pl-8">
            <div className="transform hover:scale-110 transition-transform cursor-pointer">
              <FavoritesCounter count={favoritesCount} />
            </div>
            <DarkModeToggle dark={dark} setDark={setDark} />
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;