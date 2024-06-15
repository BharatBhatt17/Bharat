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
                    src="https://media.discordapp.net/attachments/957284229031546993/1021441296172331120/Appcodeyogi.png?ex=666e5a96&is=666d0916&hm=0717cc87f9002abb9849aa9a6da43de6c49987e70db7e23b6503aa93a6ec021a&=&format=webp&quality=lossless&width=578&height=417"
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
                    src="https://media.discordapp.net/attachments/957284229031546993/1021441295790653520/Codeyogiio.png?ex=666e5a96&is=666d0916&hm=919e99f4643c80c93aa055b5c9f99eacb12d4bf044c1dcd5a1904ac3322c7957&=&format=webp&quality=lossless&width=590&height=417"
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
                    src="https://media.discordapp.net/attachments/957284229031546993/1021441296595947560/E-commerce.png?ex=666e5a96&is=666d0916&hm=5cd87e884178c4a2d962660f526dae8f36ec76cba62a4a24226067fbca1218ad&=&format=webp&quality=lossless&width=586&height=417"
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
