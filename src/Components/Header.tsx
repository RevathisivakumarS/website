import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  
  const handleMenu = () => {
    setOpen((prev) => !prev);
    // setShowLinks(false); // Close the links when toggling the sidebar button
  };

  return (
    <header className="bg-gray-800 text-white p-4 sm:border-b-2 md:border-b-4 relative">
      <div className="container mx-auto flex justify-end md:justify-between items-center">
      <div className="-mr-2 flex flex-col md:hidden">
        <button
          type="button"
          onClick={handleMenu}
          className="inline-flex items-center justify-center p-2 rounded-md"
        >
          <span className="sr-only">Open Main Menu</span>
          {open === true ? (
            <FaTimes className="w-5 h-5" />
          ) : (
            <FaBars className="w-5 h-5" />
          )}
        </button>
      </div>
      {open ? (
        <div className="md:hidden">
          <nav>
          <div className="pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
          <NavLink to="/Products" className=" hover:underline text-white py-2 px-4 hover:bg-gray-600">
              Products
            </NavLink>
            <NavLink to="/demo" className=" hover:underline text-white py-2 px-4 hover:bg-gray-600">
              Demo
            </NavLink>
            <NavLink to="/about" className=" hover:underline text-white py-2 px-4 hover:bg-gray-600" >
              About
            </NavLink>
            <NavLink to="/Contact" className=" hover:underline text-white py-2 px-4 hover:bg-gray-600">
              Contact Us
            </NavLink>
         
          </div>
          </nav>
        </div>
       
        ) : null}
      

        {}

         <nav className={`hidden md:flex flex-col md:flex-row space-y-4 md:space-y-0 sm:space-x-8 md:space-x-8 ml-auto`}>
          <Link to="/Products" className="hover:underline px-4 py-8 mx-4">
            Products
          </Link>
          <Link to="/demo" className="hover:underline px-4 py-8 mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 2xl:mx-24">
            Demo
          </Link>
          <Link to="/about" className="hover:underline px-4 py-8 mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 2xl:mx-24">
            About
          </Link>
          <Link to="/Contact" className="hover:underline px-4 py-8 mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 2xl:mx-24">
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;


