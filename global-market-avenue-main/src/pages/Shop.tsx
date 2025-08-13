import React from 'react';

const Shop = () => (
  <div className="min-h-screen bg-gradient-to-br from-pink-500 via-indigo-400 to-fuchsia-400 flex flex-col items-center justify-center px-4">
    <div className="flex flex-col items-center justify-center bg-white/80 dark:bg-gray-900/80 rounded-3xl shadow-2xl p-10 max-w-lg w-full">
      <svg width="64" height="64" fill="none" viewBox="0 0 24 24" className="mb-6 text-pink-600 dark:text-indigo-400"><path fill="currentColor" d="M7 18c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v9c0 1.1-.9 2-2 2H7Zm0 2h10c2.2 0 4-1.8 4-4V7c0-2.2-1.8-4-4-4H7C4.8 3 3 4.8 3 7v9c0 2.2 1.8 4 4 4Z"/></svg>
      <h1 className="text-4xl font-extrabold font-poppins mb-4 text-gray-900 dark:text-white">Shop Page</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 font-inter mb-2">This section is coming soon!<br />Soon you’ll be able to browse and shop amazing products here.</p>
    </div>
  </div>
);

export default Shop;
