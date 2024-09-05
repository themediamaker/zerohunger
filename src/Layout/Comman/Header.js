import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();

  const data = () => {
    router.push('/donate');
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md flex items-center justify-between px-4 md:px-8 py-2 z-50">
      <h1 className="w-6/12 md:w-2/12">
        <img src="/images/Add_a_heading.png" alt="section-icon" />
      </h1>

      <nav className="hidden md:block font-semibold text-lg">
        <ul className="flex items-center space-x-4">
          <li className="relative group p-2 md:p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <Link href="/" legacyBehavior>
              <span>Home</span>
            </Link>
          </li>
          <li className="p-2 md:p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <Link href="/about/over-mission" legacyBehavior>
              <span>About US</span>
            </Link>
          </li>
          <li className="p-2 md:p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <Link href="/about/over-mission" legacyBehavior>
              <span>Our Mission</span>
            </Link>
          </li>
          <li className="p-2 md:p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <Link href="/contact" legacyBehavior>
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </nav>

      <button
        className="middle none center mr-2 md:mr-4 rounded-lg bg-red-500 py-2 px-4 md:py-3 md:px-6 font-sans text-xs md:text-sm font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        onClick={data}
      >
        Donate Now
      </button>

      {/* Mobile menu toggle */}
      <div className="block md:hidden">
        <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
