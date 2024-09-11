import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa'; // FontAwesome icons for toggle button

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleDonateClick = () => {
    router.push('/donate');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md flex items-center justify-between px-2 md:px-4 py-1 z-50 w-full">
      {/* Logo Section */}
      <h1 className="w-4/12 sm:w-3/12 md:w-2/12 ml-2">
  <img 
    src="/images/Add_a_heading.png" 
    alt="section-icon" 
    className="
      w-full h-auto
      max-w-[50px]  // Default size for smaller screens (e.g., mobile)
      sm:max-w-[70px] // For small screens (e.g., small mobile)
      md:max-w-[90px] // For medium screens (e.g., tablets)
      lg:max-w-[90px] // For large screens (e.g., laptops)
      xl:max-w-[90px] // For extra-large screens (e.g., desktop)
    "
  />
</h1>




      {/* Desktop Navigation */}
      <nav className="hidden md:block font-semibold text-lg">
        <ul className="flex items-center space-x-4">
          <li className="relative group p-2 md:p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <Link href="/" legacyBehavior>
              <span>Home</span>
            </Link>
          </li>
          <li className="p-2 md:p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <Link href="/about" legacyBehavior>
              <span>About Us</span>
            </Link>
          </li>
          <li className="p-2 md:p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <Link href="/our-mission" legacyBehavior>
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

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="absolute top-14 left-0 w-full bg-white shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li className="p-2 border-b-2 border-green-500 hover:text-green-500 duration-200 cursor-pointer">
              <Link href="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="p-2 border-b-2 border-green-500 hover:text-green-500 duration-200 cursor-pointer">
              <Link href="/about" onClick={toggleMenu}>
                About Us
              </Link>
            </li>
            <li className="p-2 border-b-2 border-green-500 hover:text-green-500 duration-200 cursor-pointer">
              <Link href="/our-mission" onClick={toggleMenu}>
                Our Mission
              </Link>
            </li>
            <li className="p-2 border-b-2 border-green-500 hover:text-green-500 duration-200 cursor-pointer">
              <Link href="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}

      {/* Donate Button */}
      <button
        className="middle none center mr-2 md:mr-4 rounded-lg bg-red-500 py-2 px-4 md:py-3 md:px-6 font-sans text-xs md:text-sm font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        onClick={handleDonateClick}
      >
        Donate Now
      </button>

      {/* Toggle Button for Mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl focus:outline-none">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Header;
