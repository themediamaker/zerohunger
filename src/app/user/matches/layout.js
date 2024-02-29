"use client"
import React, { useState } from 'react';
import matchesItem from '../../../items/matchesItem';
import './Matches.css';
import Link from 'next/link';

const Layout = ({ children }) => {
  const itemsPerColumn = 8; // Number of items per column
  const totalColumns = Math.ceil(matchesItem.length / itemsPerColumn); // Calculate total number of columns
  const columnData = Array.from({ length: totalColumns }, (_, index) => {
    const startIndex = index * itemsPerColumn;
    const endIndex = Math.min(startIndex + itemsPerColumn, matchesItem.length);
    return matchesItem.slice(startIndex, endIndex);
  });

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <main>
      <div className='Matches-main'>
        <ul>
          {columnData[0].map((data, index) => (
            <li key={index}>
              <Link href={data.link}>{data.Name}</Link>
            </li>
          ))}
          {totalColumns > 1 && isMenuOpen && <li onClick={toggleMenu}>More</li>}
        </ul>
      </div>
      
      {isMenuOpen && (
        <div
          onClick={closeMenu}
          className="origin-top-right absolute right-40 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 px-2 py-2"
        >
          {columnData.slice(1).map((column, columnIndex) => (
            <div key={columnIndex} className="column">
              {column.map((data, index) => (
                <Link key={index} href={data.link} className="block px- p-5 text-sm text-gray-700 hover:bg-gray-100 rounded-md border-b">
                  {data.Name}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
     
      <div>{children}</div>
    </main>
  );
};

export default Layout;
