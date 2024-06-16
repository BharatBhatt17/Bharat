import React from "react";
import { AiOutlineHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript, SiTailwindcss, SiNodedotjs } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";

function Skills() {
  return (
    <div
      name="skills"
      className="p-20 text-white bg-black font-medium text-2xl md:text-5xl flex flex-col items-center justify-center "
    >
      S K I L L S
      <div className=" flex flex-col items-center pt-20 h-screen ">
        <div className="text-cyan-400  md:grid md:grid-cols-5 md:gap-12 grid grid-cols-2 gap-7 font-serif">
          <div className="flex flex-col items-center justify-center md:gap-5">
            <div>
              <AiOutlineHtml5 className="md:h-40 h-20 w-20 md:w-40" />
            </div>
            <div>
              <p className="text-white text-lg ">HTML</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center md:gap-5">
            <div>
              <DiCss3 className="md:h-40 h-20 w-20 md:w-40" />
            </div>
            <div>
              <p className="text-white text-lg">CSS</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center md:gap-5">
            <div>
              <SiJavascript className="md:h-40 h-20 w-20 md:w-40" />
            </div>
            <div>
              <p className="text-white text-lg ">JavaScript</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center md:gap-5">
            <div>
              <SiTailwindcss className="md:h-40 h-20 w-20 md:w-40" />
            </div>
            <div>
              <p className="text-white text-lg ">Tailwind CSS</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center md:gap-5">
            <div>
              <RiReactjsFill className="md:h-40 h-20 w-20 md:w-40" />
            </div>
            <div>
              <p className="text-white text-lg ">React</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center md:gap-5">
            <div>
              <SiNodedotjs className="md:h-40 h-20 w-20 md:w-40" />
            </div>
            <div>
              <p className="text-white text-lg ">Node.Js</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center md:gap-5">
            <div>
              <AiFillGithub className="md:h-40 h-20 w-20 md:w-40" />
            </div>
            <div>
              <p className="text-white text-lg ">Github</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
