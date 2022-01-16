import React from "react";
import Desc from "./Desc";
import Title from "./Title";

const Contact = () => {
  return (
    <div className="flex md:mt-10 md:flex-row flex-col pb-16 ">
      <div className="md:w-6/12">
        <Title>Contact</Title>
        <Desc>My available contact, you can contact me for 24/7</Desc>
        <div className="mt-14">
          <div className="flex">
            <div className="p-4 bg-gray-700/50">
              <img src="/phone.svg" className="h-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-white/60">Phone</h3>
              <p className="md:text-lg font-semibold">+62 895 3669 23820</p>
            </div>
          </div>
          <div className="flex mt-10">
            <div className="p-4 bg-gray-700/50">
              <img src="/mail.svg" className="h-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-white/60">Email</h3>
              <p className="md:text-lg font-semibold">decozzfx@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-6/12 flex md:flex-row flex-col md:items-center pb-32 mt-10 justify-center relative">
        <div className="p-6 lg:w-96 md:-ml-5 lg:-ml-20 w-60 bg-gray-500/20 rounded-tl-3xl ">
            <h1 className="md:text-md text-sm">"My contact is always open to you, i will be so happy to get message from you"</h1>
        </div>
        <div className="absolute p-3 bg-gray-500/10 rounded-full mt-60 -mr-72 md:justify-right md:ml-0 ml-40 sm:ml-96">
          <div className="p-3 bg-gray-500/10 rounded-full">
            <img src="/potrait-2-1.png" className="rounded-full w-14 bg-white" />
          </div>
          <div className="absolute mt-4 w-40 -ml-32 bg-gray-500/20 rounded-bl-3xl">
            <h4 className="p-3 text-xs">"Especially from my GF, Sab***a 🥰😆"</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
