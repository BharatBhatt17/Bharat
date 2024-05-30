import React from "react";
import Aboutmeimg from "./images/Aboutmeimg.jpg";


const Aboutme = () => {
  return (
    <div
      name="about"
      className="h-screen md:flex md:flex-col md:justify-center md:items-center md:p-20  pt-20"
      style={{
        backgroundImage:
          "url(https://media.discordapp.net/attachments/957284229031546993/1212394513981513738/IMG_20240228_190942.jpg?ex=662da9a1&is=662c5821&hm=96fa9597332346914af7b2893c277ea8f87b39ae97fda6cfeee76b1765e49547&=&format=webp)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" text-white h-screen md:p-2 flex flex-col items-center md:justify-center">
        <div className=" md:flex md:flex-row flex flex-col-reverse gap-5 md:gap-10">
          <div className="flex flex-col justify-center">
            <span className=" text-5xl md:text-9xl font-bold">Hello,</span>
            <span className="text-2xl md:text-4xl font-semibold font-mono">
              a bit about me:
            </span>
            <hr className="my-2" />
          </div>
          <div className="flex justify-center">
            <img
              url= {Aboutmeimg} alt="Aboutmeimg"
              className=" rounded-full md:h-96 h-40 md:w-96 w-40 shadow-xl shadow-white"
            ></img>
          </div>
        </div>
        <div className=" flex flex-col p-2 md:p-12 ">
          <h1 className=" text-lg md:text-3xl font-bold ">
            I AM A FRONT END DEVELOPER FROM UTTARAKHAND.
          </h1>
          <p className="font-mono text-sm md:text-lg mt-2 ">
            I enjoy taking complex problems and turning them into simple and
            beautiful interface designs. I also love the logic and structure of
            coding and always strive to write elegant and efficient code. When
            I'm not coding, you'll find me in the gym or on the volleyball
            court.
          </p>
          <div className="flex justify-center items-center">
            <a
              href="https://drive.google.com/file/d/1-2AQ3r1DtiKom3i4b8vqBX4fHw31BACL/view?usp=drive_link"
              download={true}
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-3 md:my-6 m-auto flex items-center rounded-full shadow-white shadow-lg font-semibold hover:scale-110 duration-300 "
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
