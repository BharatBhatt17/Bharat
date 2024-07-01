import React from "react";

function Projects() {
  return (
    <div
      name="projects"
      className="text-black font-medium text-2xl md:text-5xl md:p-20  p-20 flex flex-col items-center justify-center"
    >
      <p>P R O J E C T S</p>
      <div>
        <div className="bg-white text-black h-screen pt-20 font-serif ">
          <div className="md:gap-10 md:grid md:grid-cols-3 md:text-2xl flex flex-col gap-3 text-sm ">
            <div className="flex flex-col items-center gap-5">
              <div>
                <a
                  href="https://stellar-horse-9fe354.netlify.app/lectures"
                  target="_blank"
                >
                  <img
                    src="https://media.discordapp.net/attachments/957284229031546993/1021441296172331120/Appcodeyogi.png?ex=66837296&is=66822116&hm=79f45c080c2666d3c41e2fe59855c35c18b6dc1d5cc4710a2a0b3dc3e52dca59&=&format=webp&quality=lossless&width=512&height=370"
                    className=" shadow-2xl shadow-black hover:scale-105 rounded-tl-3xl rounded-br-3xl md:h-full h-40"
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
                    src="https://media.discordapp.net/attachments/957284229031546993/1021441295790653520/Codeyogiio.png?ex=66837296&is=66822116&hm=9604ce9278d0e4553d6ee36381db1ed82c2c2b18c1c792c338e39fced880e943&=&format=webp&quality=lossless&width=512&height=362"
                    className="shadow-2xl shadow-black hover:scale-105 rounded-tl-3xl rounded-br-3xl md:h-full h-40"
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
                    src="https://media.discordapp.net/attachments/957284229031546993/1021441296595947560/E-commerce.png?ex=66837296&is=66822116&hm=307434b0b9e0b8e412464714c469196a11c5cd7e460b5bff506814f501d4c53d&=&format=webp&quality=lossless&width=512&height=364"
                    className="shadow-2xl shadow-black hover:scale-105 rounded-tl-3xl rounded-br-3xl md:h-full h-40"
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
