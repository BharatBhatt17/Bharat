import React from "react";
import {
  AiOutlineCopyrightCircle,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import logo from "./images/logo.jpg";
import heart from "./images/heart.jpg";


function Footer() {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-black text-white p-3 px-6 flex flex-col items-center w-full font-serif"
   
    >
      <div className="text-3xl flex gap-3">
        <a
          href="https://www.facebook.com/neverforgetzZyourdreamzZ"
          target="_blank"
        >
          <AiOutlineFacebook className="hover:scale-110 hover:text-cyan-400 " />
        </a>
        <a href="https://www.linkedin.com/in/bharatbhattweb/" target="_blank">
          <AiFillLinkedin className="hover:scale-110 hover:text-cyan-400" />
        </a>
        <a
          href="https://www.instagram.com/neverforgetz_yourdreamzz/"
          target="_blank"
        >
          <AiOutlineInstagram className="hover:scale-110 hover:text-cyan-400 " />
        </a>
      </div>

      <div className="flex flex-col md:flex md:flex-row md:gap-5 items-center ">
        <div className="flex gap-1 items-center md:text-lg">
          <AiOutlineCopyrightCircle />
          <p className="flex text-sm md:text-lg items-center gap-1">
            Copyright
          </p>

          <img
            src={logo}
            className="md:h-6 h-4 w-4 md:w-6"
          ></img>
          <span className="font-bold text-sm md:text-xl text-cyan-400">
            BHARATBHATT
          </span>
        </div>
        <div className="text-sm md:text-lg">All Rights Reserved.</div>
      </div>

      <span className="flex gap-1 font-bold text-sm md:text-lg">
        Made with
        <img
          src={heart}
          className="md:h-8 h-5 w-5 md:w-8 animate-pulse"
        ></img>
        at
        <a href="https://codeyogi.io" target="_blank" className="text-red-500">
          CodeYogi
        </a>
      </span>
    </div>
  );
}

export default Footer;
