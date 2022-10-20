import React from "react";
import Image from "next/image";
import ContactImg from "../public/assets/contact.jpg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {HiOutlineChevronDoubleUp} from "react-icons/hi"
import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact" className=" w-full lg:h-screen">
      <div className=" max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className=" text-xl tracking-widest uppercase text-[#ffef0f] mt-[40px]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className=" col-span-3 lg:col-span-2 w-full h-full shadow-xl border border-[#ffef0f] rounded-lg p-4">
            <div className=" lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={ContactImg}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Cole Taylor</h2>
                <p>Front End Developer</p>
                <p className="py-4">
                  I am avaliable for freelance or full-time positions. Contact
                  me and lets go from there.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <div className=" rounded-full shadow-lg border border-[#ffef0f] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                  <div className=" rounded-full shadow-lg border border-[#ffef0f] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub />
                  </div>
                  <div className=" rounded-full shadow-lg border border-[#ffef0f] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <div className=" rounded-full shadow-lg border border-[#ffef0f] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-span-3 w-full h-auto shadow-xl border border-[#ffef0f] rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className=" flex flex-col">
                    <label className="Uppercase text-sm py-2">Name</label>
                    <input
                      className="rounded-lg p-3 bg-[#374151]"
                      type="text"
                    />
                  </div>
                  <div className=" flex flex-col">
                    <label className="Uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="rounded-lg p-3 bg-[#374151]"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="Uppercase text-sm py-2">Email</label>
                  <input
                    className="rounded-lg p-3 bg-[#374151]"
                    type="Email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="Uppercase text-sm py-2">Subject</label>
                  <input
                    className="rounded-lg p-3 bg-[#374151]"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="Uppercase text-sm py-2">Message</label>
                  <textarea
                    className="rounded-lg p-3 bg-[#374151]"
                    rows="10"
                  ></textarea>
                </div>
                <button className=" w-full p-4 text-gray-100 mt-4">Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
            <Link href="/">
                <div className="rounded-full shadow-lg border border-[#ffef0f] p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                    <HiOutlineChevronDoubleUp className=" m-auto text-white" size={30}/>
                </div>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
