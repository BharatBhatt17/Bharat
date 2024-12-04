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
                    src="https://media.discordapp.net/attachments/957284229031546993/1021441296172331120/Appcodeyogi.png?ex=67511c96&is=674fcb16&hm=01dcec069e74df6a6be2938776e8c20d568214e901778b0a13cdaf0124c3d47a&=&format=webp&quality=lossless&width=578&height=417"
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
                    src="https://media.discordapp.net/attachments/957284229031546993/1021441295790653520/Codeyogiio.png?ex=67511c96&is=674fcb16&hm=fe7cb952ef2c3998e40b178e797effa653e455a4c88c856f7675938dcf14a2ae&=&format=webp&quality=lossless&width=590&height=417"
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
                    src="https://media.discordapp.net/attachments/957284229031546993/1021441296595947560/E-commerce.png?ex=67511c96&is=674fcb16&hm=69f6f5af3036165286d122a5caf1f3e06878fb89a93337132bd8394b170929bc&=&format=webp&quality=lossless&width=586&height=417"
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
