import React from "react";
import SocialLinks from "./SocialLinks";
import { Link } from "react-scroll";




const Homepage = () => {
  return (
    <div
      name="home"
      className="h-screen text-black md:flex md:justify-center md:items-center md:p-20 pt-40 p-2"

    >
      <div className=" font-sans gap-8 md:gap-10 md:flex md:flex-row flex flex-col-reverse md:justify-center items-center">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-4xl md:text-7xl font-semibold font-sans ">
            CREATIVE
          </h1>
          <span className="text-xl md:text-4xl font-medium font-sans">
            D E V E L O P E R
          </span>
          <span className="text-xl md:text-3xl font-light font-sans">
            SENSIBLE TO FRONTEND
          </span>
          <div>
            <Link to="contact" smooth duration={800}>
              <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-2 md:my-6 flex items-center rounded-full mx-auto shadow-black shadow-lg font-semibold hover:scale-110 duration-300 ">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
        <SocialLinks />
        <div className="p-5">
          <img
            src="https://media.discordapp.net/attachments/957284229031546993/1019459042567016468/photostudio-11-designify-modified.png?ex=66837cb8&is=66822b38&hm=557e4de15cb757cd0c96ffb012864433801767291d383960e9477e2307ef16a2&=&format=webp&quality=lossless&width=350&height=350"
            className="rounded-full md:h-96 h-40 w-40 md:w-96 shadow-xl shadow-black"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Homepage;