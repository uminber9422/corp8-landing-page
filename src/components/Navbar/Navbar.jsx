import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 left-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-50 bg-white/90 backdrop-blur-md border-b border-neutral-200">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a className="flex-none text-xl font-semibold text-black" href="#">
            <span className="text-primary-600">Corp8</span>.ai
          </a>
          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border border-neutral-200 hover:bg-neutral-100 text-neutral-700 transition-all"
              onClick={() => setIsOpen(!isOpen)}
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              {isOpen ? <FaTimes className="h-4 w-4" /> : <FaBars className="h-4 w-4" />}
            </button>
          </div>
        </div>
        
        <div id="navbar-collapse-with-animation" className={`hs-collapse ${isOpen ? 'block' : 'hidden'} transition-all duration-300 basis-full grow sm:block`}>
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
            <a className="font-medium text-neutral-600 hover:text-primary-600" href="#features">Features</a>
            <a className="font-medium text-neutral-600 hover:text-primary-600" href="#solutions">Solutions</a>
            <a className="font-medium text-neutral-600 hover:text-primary-600" href="#pricing">Pricing</a>
            <a className="font-medium text-neutral-600 hover:text-primary-600" href="#about">About</a>
            <div className="flex items-center gap-4">
              <a className="font-medium text-neutral-600 hover:text-primary-600" href="#login">Login</a>
              <a className="py-2 px-4 inline-flex justify-center items-center gap-2 rounded-full font-semibold bg-primary-600 text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all text-sm" href="#signup">
                Get started
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
