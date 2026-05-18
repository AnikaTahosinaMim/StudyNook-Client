import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950">
        <div className="w-16 h-16 border-4 border-purple-300 border-t-white rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loading;
