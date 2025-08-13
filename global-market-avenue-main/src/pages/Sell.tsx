import React from 'react';

const Sell = () => (
  <div className="min-h-screen bg-gradient-to-br from-fuchsia-400 via-indigo-400 to-pink-400 flex flex-col items-center justify-center px-4">
    <div className="flex flex-col items-center justify-center bg-white/80 dark:bg-gray-900/80 rounded-3xl shadow-2xl p-10 max-w-lg w-full">
      <svg width="64" height="64" fill="none" viewBox="0 0 24 24" className="mb-6 text-fuchsia-600 dark:text-indigo-400"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-2.21 0-4.2-.9-5.66-2.34C8.53 16.34 10.17 17 12 17s3.47-.66 5.66-1.34C16.2 19.1 14.21 20 12 20Zm0-16c2.21 0 4.2.9 5.66 2.34C15.47 7.66 13.83 7 12 7s-3.47.66-5.66 1.34C7.8 4.9 9.79 4 12 4Zm0 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4Z"/></svg>
      <h1 className="text-4xl font-extrabold font-poppins mb-4 text-gray-900 dark:text-white">Become a Vendor</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 font-inter mb-2">This section is coming soon!<br />Soon you’ll be able to register as a vendor and start selling on Orymart.</p>
    </div>
  </div>
);

export default Sell;
