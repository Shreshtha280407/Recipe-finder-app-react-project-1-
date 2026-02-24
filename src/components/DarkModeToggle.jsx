import React from "react";

function DarkModeToggle({ dark, setDark }) {
  return (
    <button
      onClick={() => setDark(!dark)}
      className={`
        px-4 py-2 rounded-full transition-all duration-300
        ${dark
          ? "bg-yellow-100 text-gray-900 shadow-lg"
          : "bg-gray-800 text-yellow-300 shadow-md"}
      `}
    >
      {dark ? "☀ Light" : "🌙 Dark"}
    </button>
  );
}

export default DarkModeToggle;
