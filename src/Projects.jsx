import React from "react";

function Projects() {
  return (
    <div
      name="projects"
      className="text-black font-medium text-2xl md:text-5xl md:p-20  p-20 flex flex-col items-center justify-center"
    >
      <p>P R O J E C T S</p>
      <div>
        <div className="bg-white text-black h-screen pt-20  ">
          <div className="md:gap-10 md:grid sm:grid-cols-3 md:text-2xl flex flex-col gap-10 text-sm">
            <div className="flex flex-col items-center gap-5">
              <div>
                <a
                  href="https://stellar-horse-9fe354.netlify.app/lectures"
                  target="_blank"
                >
                  <img
                    src="https://media.discordapp.net/attachments/957284229031546993/1021441296172331120/Appcodeyogi.png?ex=662dc116&is=662c6f96&hm=9377b166bc9af02179f69579227f521457d979edf711092a4927147da44ea07a&=&format=webp&quality=lossless&width=801&height=578"
                    className=" shadow-2xl shadow-black hover:scale-105 rounded-tl-3xl rounded-br-3xl"
                  ></img>
                </a>
              </div>
              <div>
                <h2>app.codeyogi.io clone</h2>
              </div>
            </div>
            <div className="flex flex-col items-center gap-5">
              <div>
                <a
                  href="https://assignment-1-bharatbhatt2.codeyogi-batch-2.repl.co/"
                  target="_blank"
                >
                  <img
                    src="https://media.discordapp.net/attachments/957284229031546993/1021441295790653520/Codeyogiio.png?ex=662dc116&is=662c6f96&hm=de26270b3c855a130aa248df3f93c4eb06a977258a14841326b023585784353f&=&format=webp&quality=lossless&width=817&height=577"
                    className="shadow-2xl shadow-black hover:scale-105 rounded-tl-3xl rounded-br-3xl"
                  ></img>
                </a>
              </div>
              <div>
                <h2>codeyogi.io</h2>
              </div>
            </div>
            <div className="flex flex-col items-center gap-5">
              <div>
                <a
                  href="https://jolly-blini-5c566a.netlify.app"
                  target="_blank"
                >
                  <img
                    src="https://media.discordapp.net/attachments/957284229031546993/1021441296595947560/E-commerce.png?ex=662dc116&is=662c6f96&hm=a0a54c64659a600bc92afe1ed2ff438b586cb049b5960b466b2431b08633625f&=&format=webp&quality=lossless&width=812&height=578"
                    className="shadow-2xl shadow-black hover:scale-105 rounded-tl-3xl rounded-br-3xl"
                  ></img>
                </a>
              </div>
              <div>
                <h2>e-commerce site</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
