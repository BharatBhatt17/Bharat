import React from "react";



const Aboutme = () => {
  return (
    <div
      name="about"
      className="h-screen md:flex md:flex-col md:justify-center md:items-center md:p-20  pt-20
      "
      style={{
        backgroundImage:
          "url(https://media.discordapp.net/attachments/957284229031546993/1212394513981513738/IMG_20240228_190942.jpg?ex=66835b21&is=668209a1&hm=ce3fd3038b6bf4133a759b2cf6beff408bd0692f99be099b4005134993a970fe&=&format=webp&width=512&height=341)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" text-white md:p-2 flex flex-col items-center md:justify-center ">
        <div className=" md:flex md:flex-row flex flex-col-reverse gap-5 md:gap-10">
          <div className="flex flex-col justify-center">
            <span className=" text-5xl md:text-9xl font-bold ">Hello,</span>
            <span className="text-2xl md:text-4xl font-semibold font-mono">
              a bit about me:
            </span>
            <hr className="my-2" />
          </div>
          <div className="flex justify-center">
            <img
              src="https://media.discordapp.net/attachments/957284229031546993/1019587762527150080/shadow-designify.png?ex=66834bd9&is=6681fa59&hm=98d2bcc7c2a3c1c417fa43b24f5efc2d17161ee0a2063629ae6b494efd808c23&=&format=webp&quality=lossless&width=350&height=350"
              className="rounded-full md:h-96 h-40 w-40 md:w-96 shadow-xl shadow-white"

              
            ></img>
          </div>
        </div>
        <div className=" flex flex-col p-2 md:p-12 mx-10 md:mx-0">
          <h1 className=" text-lg md:text-3xl font-bold font-serif">
            I AM A FRONT END DEVELOPER FROM UTTARAKHAND.
          </h1>
          <p className="font-mono text-sm md:text-lg mt-2">
            I enjoy taking complex problems and turning them into simple and
            beautiful interface designs. I also love the logic and structure of
            coding and always strive to write elegant and efficient code. When
            I'm not coding, you'll find me in the gym or on the volleyball
            court.
          </p>
          <div className="flex justify-center items-center">
            <a
              href="https://drive.google.com/file/d/1ey3Ava_6-4ijaDg-gSCx_Y7BR7sk5kTT/view?usp=sharing"
              target="_blank"
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
