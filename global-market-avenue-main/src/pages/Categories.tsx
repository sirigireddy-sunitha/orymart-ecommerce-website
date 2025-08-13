import React from 'react';

const Categories = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-700 via-fuchsia-400 to-pink-400 flex flex-col items-center justify-center px-4">
    <div className="flex flex-col items-center justify-center bg-white/80 dark:bg-gray-900/80 rounded-3xl shadow-2xl p-10 max-w-lg w-full">
      <svg width="64" height="64" fill="none" viewBox="0 0 24 24" className="mb-6 text-indigo-600 dark:text-fuchsia-400"><path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm-1-7V7h2v6h-2Zm0 4v-2h2v2h-2Z"/></svg>
      <h1 className="text-4xl font-extrabold font-poppins mb-4 text-gray-900 dark:text-white">Categories Page</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 font-inter mb-2">This section is coming soon!<br />Stay tuned for a beautiful, fully-featured categories experience.</p>
    </div>
  </div>
);

export default Categories;
