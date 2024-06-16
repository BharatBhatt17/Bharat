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
                    src="https://media.discordapp.net/attachments/957284229031546993/1021441296172331120/Appcodeyogi.png?ex=666fac16&is=666e5a96&hm=2e9e75d7ad43883d964be856374ee6243d4044e365c65c1ba2abd96aa8d1185f&=&format=webp&quality=lossless&width=857&height=619"
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
                    src="https://media.discordapp.net/attachments/957284229031546993/1021441295790653520/Codeyogiio.png?ex=666fac16&is=666e5a96&hm=9dbc2ce9e37482b8d8e3bce08701977fa4ece7fb6ac8c8df02a9e70652c775ab&=&format=webp&quality=lossless&width=876&height=619"
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
                    src="https://media.discordapp.net/attachments/957284229031546993/1021441296595947560/E-commerce.png?ex=666fac16&is=666e5a96&hm=c80bd8b1521b8a0b7dd98d291f0bae2d3c3e44f4d31a8038a1d1bb1633be37e6&=&format=webp&quality=lossless&width=870&height=619"
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
