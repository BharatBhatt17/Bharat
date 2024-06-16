import React from "react";
import {
  AiOutlineCopyrightCircle,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

function Footer() {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-black text-white p-3 px-6 flex flex-col items-center w-full font-serif">
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
            src="https://media.discordapp.net/attachments/957284229031546993/1019464576556859422/bharat-removebg-preview-removebg-preview.png?ex=666e69df&is=666d185f&hm=3bfbf8edcf563bfc272af4f45fb1347b080b4d1449b78e8a4d43c2886a9fc8f8&=&format=webp&quality=lossless"
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
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"
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
