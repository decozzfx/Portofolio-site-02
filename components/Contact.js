import React, { Fragment, useState } from "react";
import { Dialog, Transition } from '@headlessui/react'
import Desc from "./Desc";
import Title from "./Title";
import axios from "axios";


export default function Contact(){
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [btnSend, setBtnSend] = useState(false)

  let [isOpen, setIsOpen] = useState(false)
  let [errorIsOpen, setErrorIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  function resetState(){
    setFullname('')
    setEmail('')
    setSubject('')
    setMessage('')
    closeModal()
  }

  function handleSubmit(e){
    e.preventDefault()
    setBtnSend(true)
    var options = {
      method: 'POST',
      url: process.env.CONTACT_API_URL,
      headers: {
        'content-type': 'application/json',
        'x-user-name': process.env.CONTACT_API_USERNAME,
        'x-rapidapi-host': process.env.CONTACT_API_HOST,
        'x-rapidapi-key': process.env.CONTACT_API_KEY
      },
      data: {
        from: {name: email},
        to: {name: 'decoz', address: process.env.CONTACT_API_EMAIL},
        subject: subject,
        message: `${fullname} ${message}`,
        show_noreply_warning: true
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
      openModal()
      setBtnSend(false)
    }).catch(function (error) {
      setErrorIsOpen(true)
      console.error(error);
      setBtnSend(false)
    });
  }

  return (
    <section className="pb-20">
    <div className="flex md:mt-10 md:flex-row flex-col pb-10 ">
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
      <div className="md:w-6/12 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="rounded-lg shadow-xl flex flex-col px-8 py-8 pb-10 bg-white mt-24 w-80">
      <h1 className="text-2xl font-bold text-gray-600">Send a message</h1>

      <label className="text-gray-500 font-light mt-8 ">Full name<span className="text-red-500 ">*</span></label>
      <input type="text" name="fullname" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" value={fullname}
            onChange={(e) => {setFullname(e.target.value)}} />

      <label className="text-gray-500 font-light mt-4 ">E-mail<span className="text-red-500">*</span></label>
      <input type="email" name="email" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" value={email}
            onChange={(e) => {setEmail(e.target.value)}}/>

      <label  className="text-gray-500 font-light mt-4 ">Subject<span className="text-red-500">*</span></label>
      <input type="text" name="subject" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" value={subject}
            onChange={(e) => {setSubject(e.target.value)}} />

      <label className="text-gray-500 font-light mt-4 ">Message<span className="text-red-500">*</span></label>
      <textarea name="message" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" value={message}
            onChange={(e) => {setMessage(e.target.value)}} ></textarea>
      <div className="flex flex-row items-center justify-start">
        
        <button type="submit" className={`border-green-500px-10 mt-8 py-2 px-6 bg-[#130F49] hover:scale-105 text-gray-50 font-light rounded-md text-lg flex flex-row items-center disabled:opacity-40 ${ btnSend ? 'cursor-not-allowed' : ''} `} disabled={btnSend ? true : false} >
          Send
          <svg width="24" height="24" viewBox="0 0 24 24" className="text-cyan-500 ml-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z" fill="currentColor" />
          </svg>
        </button>
      </div>
    </form>
      </div>
    </div>
      <div className="flex flex-col justify-center text-center w-1/2 md:pl-14 md:-mt-72 md:-ml-10 lg:pl-20 sm:pl-10 xs:pl-0 ">
      <div className="p-6 lg:w-96 w-60 bg-gray-500/20 md:rounded-tl-3xl rounded-tr-3xl ">
            <h1 className="md:text-md text-sm">"My contact is always open to you, i will be so happy to get message from you"</h1>
        </div>
        <div className="flex justify-center items-center p-3 w-28 h-28 lg:ml-80 md:ml-52 mt-2 bg-gray-500/10 rounded-full">
          <div className="p-3 bg-gray-500/10 h-20 w-20 rounded-full">
            <img src="/potrait-2-1.png" className="rounded-full w-14 h-14 bg-white" />
          </div>
        </div>
          <div className=" mt-2 lg:ml-48 md:ml-20 w-40  bg-gray-500/20 md:rounded-bl-3xl rounded-br-3xl">
            <h4 className="p-3 text-xs">"Especially from my GF, Sab***a 🥰😆"</h4>
          </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white border-2 shadow-2xl rounded-2xl border-2 border-green-500 ">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-center text-gray-900"
                >
                  Message is delivered
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Your message has been successfully submitted.
                    Thank you {fullname}
                  </p>
                </div>

                <div className="mt-4 flex justify-center">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={() => resetState()}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      <Transition appear show={errorIsOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white border-2 shadow-2xl rounded-2xl border-2 border-red-500 ">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-center font-semibold text-gray-900"
                >
                  Something Error
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500 text-center">
                    Server is looking busy, please try again..!
                  </p>
                </div>

                <div className="mt-4 flex justify-center">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={() => setErrorIsOpen(false)}
                  >
                    Try Again!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
};

