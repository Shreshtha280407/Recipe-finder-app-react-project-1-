import React from "react";

function Pagination({ total, perPage, current, setCurrent }) {
  const pages = Math.ceil(total / perPage);

  if (pages <= 1) return null;

  return (
    <div className="flex justify-center gap-3 mt-8">
      {[...Array(pages)].map((_, i) => (
        <button
          key={i}
          onClick={() => setCurrent(i + 1)}
          className={`px-4 py-2 rounded-lg border transition ${
            current === i + 1
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-700 hover:bg-gray-200"
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
