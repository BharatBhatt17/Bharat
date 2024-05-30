import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

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
    <div className=" bg-gradient-to-t from-gray-600 to-black text-white font-sans flex items-center justify-between px-1 py-2 md:p-3 md:px-6 fixed w-full ">
      <div className="md:h-12 md:w-12 h-7 w-7 text-cyan-400 flex items-center gap-1">
        <img src="https://media.discordapp.net/attachments/957284229031546993/1019464576556859422/bharat-removebg-preview-removebg-preview.png?ex=662d279f&is=662bd61f&hm=097236835ce96fd4d066e9c2e3e4fe5279f7d3b43d718b6c977ad08861242af1&=&format=webp&quality=lossless"></img>
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
        className="cursor-pointer pr-1 md:pr-4 z-10 text-white md:hidden"
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
