import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-slate-800 shadow-md">
      <div className="container mx-auto px-4 py-6 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          Restaurant Review Responder
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Generate professional, personalized replies to customer reviews instantly.
        </p>
      </div>
    </header>
  );
};

export default Header;
