import React from "react";
import Desc from "./Desc";
import Title from "./Title";

const Contact = () => {
  return (
    <div className="ml-11 flex mt-10">
      <div className="w-6/12">
        <Title>Contact</Title>
        <Desc>My available contact, you can contact me for 24/7</Desc>
        <div className=" mt-14">
          <div className="flex">
            <div className="p-4 bg-gray-700/50">
              <img src="/phone.svg" className="h-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-white/60">Phone</h3>
              <p className="text-lg font-bold">+62 895 3669 23820</p>
            </div>
          </div>
          <div className="flex mt-10">
            <div className="p-4 bg-gray-700/50">
              <img src="/mail.svg" className="h-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-white/60">Email</h3>
              <p className="text-lg font-bold">decozzfx@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-6/12 flex items-center justify-center static">
        <div className="w-60 h-30 p-6 w-1/2 bg-gray-500/20 rounded-tl-3xl ">
            <h1>"My contact is always open to you, i will be so happy to get message from you"</h1>
        </div>
        <div className="absolute p-3 bg-gray-500/10 rounded-full mt-60 -mr-72">
          <div className="p-3 bg-gray-500/10 rounded-full">
            <img src="/potrait-2-1.png" className="rounded-full w-14 bg-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
