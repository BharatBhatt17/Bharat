import React from "react";
import { TbMailOpened, TbPhoneCall, TbLocation, TbBrandWhatsapp } from "react-icons/tb";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-white text-black md:p-20 pt-20 p-2 h-screen md:flex ">


      <div 
      className="md:flex md:flex-col items-center w-screen gap-2 md:justify-center font-serif gap-10"> 
      <div className=" font-bold text-center font-serif p-2 md:p-5 md:mx-20 mx-24 rounded-full text-white bg-gradient-to-b from-cyan-500 to-blue-500 shadow-black shadow-xl">
        <h2 className="text-lg md:text-3xl">Do You speak Kumauni? It's ok if you don't </h2>
        <h3 className="text-md md:text-2xl" >I speak Hindi and English too.</h3>
        </div>


<div className="md:flex md:justify-between p-10 md:w-full mx-20 md:mx-0 ">
        <div className="mb-10 md:mb-0">
          <h1 className="text-2xl md:text-4xl font-bold">CONTACT WITH ME</h1>
          <hr className="my-2 md:my-5" />
          <div className="font-semibold md:text-lg text-sm font-mono gap-2 md:gap-5 flex flex-col">
            <span className="flex items-center gap-5">
              <TbMailOpened className="h-6 w-6" />
              bharat111bhatt@gmail.com
            </span>
            <span className="flex items-center gap-5">
              <TbBrandWhatsapp className="h-6 w-6 " />
              +91-8954942543
            </span>
            <span className="flex items-center gap-5">
              <TbPhoneCall className="h-6 w-6 " />
              +91-9258368090
            </span>
            <span className="flex items-center gap-5">
              <TbLocation className="h-6 w-6 " />
              Haldwani,Uttarakhand
            </span>
          </div>
        </div>
        



        <div className="font-mono md:w-1/2 text-black  md:mx-0 ">
          <form
            className=" flex flex-col justify-center gap-1 md:gap-5 "
            action="https://getform.io/f/0e3bcc03-6b7a-4847-95fa-65abc2a2089e"
            method="POST"
          >
            <input
              type="text"
              name="Name"
              placeholder="Name"
              className="rounded-lg py-1 px-2 border-2"
            />
            <input
              type="email"
              name="Email"
              placeholder="E-mail"
              className="rounded-lg py-1 px-2 border-2"
            />
            <textarea
              name="Message"
              placeholder="Message"
              className="rounded-lg py-1 px-2 md:h-32 border-2"
            />
            <button
              type="submit"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-10 py-3 my-3 md:my-6 mx-auto flex items-center rounded-full shadow-black shadow-lg font-semibold hover:scale-110 duration-300"
            >
              Submit
            </button>
          </form>
        </div></div>

        </div>
      </div>
     

    
  );
};
export default Contact;
