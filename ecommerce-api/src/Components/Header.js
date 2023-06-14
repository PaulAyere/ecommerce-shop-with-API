import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import logo from '../Assets/image/logo1.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black p-4 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 ml-8" />
      </div>

      <div className="relative flex items-center">
        <button
          className="text-orange-200 hover:text-white sm:hidden text-2xl"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        <ul className="hidden sm:flex space-x-4">
          <li>
            <a
              href="/"
              className="text-white hover:text-orange-300 text-xl"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-white hover:text-orange-300 text-xl"
            >
              Featured
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-white hover:text-orange-300 text-xl"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-white hover:text-orange-300 text-xl"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-white hover:text-orange-300 text-xl"
            >
              <FontAwesomeIcon icon={faUser} />
            </a>
          </li>
        </ul>

        {isMenuOpen && (
          <ul className="absolute right-0 mt-60 py-2 w-40 bg-black rounded shadow-xl">
            <li>
              <a
                href="/"
                className="block text-orange-200 hover:text-white px-4 py-2"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block text-orange-200 hover:text-white px-4 py-2"
              >
                Featured
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block text-orange-200 hover:text-white px-4 py-2"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block text-orange-200 hover:text-white px-4 py-2"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block text-orange-200 hover:text-white px-4 py-2"
              >
                <FontAwesomeIcon icon={faUser} />
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
