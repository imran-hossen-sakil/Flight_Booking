import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-black text-2xl font-bold">Logo</a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 mt-4 flex items-baseline space-x-4">
              <a href="/" className=" hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="/" className="text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="/" className="text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
              <a href="/" className="text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              <a href="/" className="text-black hover:text-red-900 px-3 py-2 text-sm font-medium bg-orange-200 p-2 rounded-3xl">Sing In</a>
              <a href="/" className="text-black hover:text-red-900 px-3 py-2 text-sm font-medium bg-orange-200 p-2 rounded-3xl">Sing Up</a>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/" className="text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="/" className="text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
          <a href="/" className="text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</a>
          <a href="/" className="text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          <a href="/" className="text-black hover:text-red-900 w-24 block px-3 text-center py-2 text-sm font-medium bg-fuchsia-400 p-2 rounded-3xl hover:bg-slate-100">Sing In</a>
          <a href="/" className="text-black hover:text-red-900 w-24 block px-3 text-center py-2 text-sm font-medium bg-fuchsia-400 p-2 rounded-3xl hover:bg-slate-100">Sing Up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
