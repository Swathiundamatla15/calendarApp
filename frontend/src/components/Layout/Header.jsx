import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-darkGray text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Communication Tracker</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/"
                className="hover:underline hover:text-spotifyGreen transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/admin"
                className="hover:underline hover:text-spotifyGreen transition"
              >
                Admin
              </Link>
            </li>
            <li>
              <Link
                to="/calendar"
                className="hover:underline hover:text-spotifyGreen transition"
              >
                Calendar
              </Link>
            </li>
            <li>
              <Link
                to="/reports"
                className="hover:underline hover:text-spotifyGreen transition"
              >
                Reports
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
