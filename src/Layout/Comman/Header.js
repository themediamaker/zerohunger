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


  const logo = ()=>{
    router.push('/');
  }
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
    onClick={logo}
  />
</h1>




      {/* Desktop Navigation */}
      <nav className="hidden md:block font-semibold text-lg">
        <ul className="flex items-center space-x-4">
        <Link href="/" legacyBehavior>
          <li className="relative group p-2 md:p-4 border-b-2 border-[#0c4c8a] border-opacity-0 hover:border-opacity-100 hover:text-[#0c4c8a] duration-200 cursor-pointer">
       
              <span>Home</span>
          </li>
          </Link>

          <Link href="/about" legacyBehavior>
          <li className="p-2 md:p-4 border-b-2 border-[#0c4c8a] border-opacity-0 hover:border-opacity-100 hover:text-[#0c4c8a] duration-200 cursor-pointer">
           
              <span>About Us</span>
     
          </li>
          </Link>
          <Link href="/our-mission" legacyBehavior>
          <li className="p-2 md:p-4 border-b-2 border-[#0c4c8a] border-opacity-0 hover:border-opacity-100 hover:text-[#0c4c8a] duration-200 cursor-pointer">

              <span>Our Mission</span>
  
          </li>
          </Link>
          <Link href="/contact" legacyBehavior>
          <li className="p-2 md:p-4 border-b-2 border-[#0c4c8a] border-opacity-0 hover:border-opacity-100 hover:text-[#0c4c8a] duration-200 cursor-pointer">
   
              <span>Contact</span>

          </li>
          </Link>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="absolute top-14 left-0 w-full bg-white shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
          <Link href="/" onClick={toggleMenu}>
            <li className="p-2 border-b-2 border-[#0c4c8a] hover:text-[#0c4c8a] duration-200 cursor-pointer">
            
                Home
        
            </li>
            </Link>
            <Link href="/about" onClick={toggleMenu}>
            <li className="p-2 border-b-2 border-[#0c4c8a] hover:text-[#0c4c8a] duration-200 cursor-pointer">
          
                About Us

            </li>
            </Link>
            <Link href="/our-mission" onClick={toggleMenu}>
            <li className="p-2 border-b-2 border-[#0c4c8a] hover:text-[#0c4c8a] duration-200 cursor-pointer">

                Our Mission
      
            </li>
            </Link>
            <Link href="/contact" onClick={toggleMenu}>
            <li className="p-2 border-b-2 border-[#0c4c8a] hover:text-[#0c4c8a] duration-200 cursor-pointer">
          
                Contact

            </li>
            </Link>
          </ul>
        </nav>
      )}

      {/* Donate Button */}
      <button
  className="middle none center mr-2 md:mr-4 rounded-lg bg-[#0c4c8a] py-2 px-4 md:py-3 md:px-6 font-sans text-xs md:text-sm font-bold uppercase text-white shadow-md shadow-[#0c4c8a]/20 transition-all hover:shadow-lg hover:shadow-[#0c4c8a]/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
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
