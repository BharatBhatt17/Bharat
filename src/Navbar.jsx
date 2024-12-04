import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./images/logo.jpg";

const Navbar = () => {
  const [nav, setNav] = useState(false);

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
      link: "projects",
    },
    {
      id: 4,
      link: "skills",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className=" bg-gradient-to-t from-gray-600 to-black text-white flex items-center justify-between px-1 py-2 md:p-3 md:px-6 fixed w-full font-serif">
      <div className="md:h-12 md:w-12 h-7 w-7 text-cyan-400 flex items-center gap-1">
        <img src={logo}></img>
        <h2 className="font-bold text-xl md:text-3xl">BHARATBHATT</h2>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-semibold text-white hover:scale-110 duration-200 hover:text-cyan-400"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-1 md:pr-4 z-10 text-white md:hidden hover:text-cyan-400"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col pt-20 items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-t from-gray-600 to-black text-white">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-2xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
