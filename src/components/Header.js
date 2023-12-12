import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "project",
    },
    {
      id: 4,
      link: "contact",
    },
  ];

  return (
    <header className="flex fixed z-[1000] bg-white items-center justify-between px-20 py-4 w-[100%]">
      <div className="flex items-center transition-colors duration-300 hover:text-purple-800 cursor-pointer">
        <div className="w-20 h-20 rounded-full mr-6 overflow-hidden bg-purple-600">
          <img
            src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
            alt="Profile"
            className="block w-[100%] h-[100%] object-cover object-center"
          />
        </div>
        <span className="text-2xl font-bold uppercase">Ravi Malakar</span>
      </div>
      <div className="w-[40%]">
        <ul className="flex justify-evenly text-lg font-medium">
          <li className="transition-colors duration-300 hover:text-purple-800 cursor-pointer">
            <Link to="home" smooth={true} offset={-150} duration={500}>
              Home
            </Link>
          </li>
          <li className="transition-colors duration-300 hover:text-purple-800 cursor-pointer">
            <Link to="about" smooth={true} offset={-110} duration={500}>
              About
            </Link>
          </li>
          <li className="transition-colors duration-300 hover:text-purple-800 cursor-pointer">
            <Link to="project" smooth={true} offset={-110} duration={500}>
              Project
            </Link>
          </li>
          <li className="transition-colors duration-300 hover:text-purple-800 cursor-pointer">
            <Link to="contact" smooth={true} offset={-110} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
