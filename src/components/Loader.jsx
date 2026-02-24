import React from "react";
function Loader() {
  return (
    <div className="text-center mt-6">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500 mx-auto"></div>
      <p>Loading...</p>
    </div>
  );
}
export default Loader;