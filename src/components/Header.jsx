import React, { useState } from "react";

const Header = ({ homeRef, servicesRef, aboutRef, projectsRef, contactRef }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setIsSidebarOpen(false); // Close sidebar after clicking a link
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className={`bg-stone-800 flex items-center justify-end p-4 mx-auto w-full fixed top-0 z-50 ${isSidebarOpen ? 'bg-opacity-75' : ''}`}>
      <div className="flex items-center">
        <button className="text-white md:hidden p-2" onClick={toggleSidebar}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <ul className="text-white hidden md:flex items-center gap-8">
          <li
            className="relative cursor-pointer group"
            onClick={() => scrollToRef(homeRef)}
          >
            <span className="text-sm font-medium transition-all duration-300 group-hover:scale-105">
              Home
            </span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </li>
          <li
            className="relative cursor-pointer group"
            onClick={() => scrollToRef(servicesRef)}
          >
            <span className="text-sm font-medium transition-all duration-300 group-hover:scale-105">
              Services
            </span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </li>
          <li
            className="relative cursor-pointer group"
            onClick={() => scrollToRef(aboutRef)}
          >
            <span className="text-sm font-medium transition-all duration-300 group-hover:scale-105">
              About
            </span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </li>
          <li
            className="relative cursor-pointer group"
            onClick={() => scrollToRef(projectsRef)}
          >
            <span className="text-sm font-medium transition-all duration-300 group-hover:scale-105">
              Projects
            </span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </li>
          <li
            className="relative cursor-pointer group"
            onClick={() => scrollToRef(contactRef)}
          >
            <span className="text-sm font-medium transition-all duration-300 group-hover:scale-105">
              Contact
            </span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500 transform origin-left scale-x-0 translate-y-1 transition-transform duration-300 group-hover:scale-x-100"></span>
          </li>
        </ul>
      </div>

      {isSidebarOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-40 flex flex-col items-center justify-center md:hidden">
          <button
            className="text-white p-2 absolute top-4 right-4"
            onClick={toggleSidebar}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <ul className="text-white flex flex-col items-center gap-8">
            <li
              className="relative cursor-pointer group"
              onClick={() => scrollToRef(homeRef)}
            >
              <span className="text-lg font-medium transition-all duration-300 group-hover:scale-105">
                Home
              </span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </li>
            <li
              className="relative cursor-pointer group"
              onClick={() => scrollToRef(servicesRef)}
            >
              <span className="text-lg font-medium transition-all duration-300 group-hover:scale-105">
                Services
              </span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </li>
            <li
              className="relative cursor-pointer group"
              onClick={() => scrollToRef(aboutRef)}
            >
              <span className="text-lg font-medium transition-all duration-300 group-hover:scale-105">
                About
              </span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </li>
            <li
              className="relative cursor-pointer group"
              onClick={() => scrollToRef(projectsRef)}
            >
              <span className="text-lg font-medium transition-all duration-300 group-hover:scale-105">
                Projects
              </span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </li>
            <li
              className="relative cursor-pointer group"
              onClick={() => scrollToRef(contactRef)}
            >
              <span className="text-lg font-medium transition-all duration-300 group-hover:scale-105">
                Contact
              </span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
