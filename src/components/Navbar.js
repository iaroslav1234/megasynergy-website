import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 backdrop-blur-md bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold gradient-text">MEGASYNERGY</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
