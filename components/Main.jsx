import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai"

const main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-50">
            LETS BUILD SOMETHING TOGETHER
          </p>
          <h1 className=" py-4 text-white">
            Hi, Im <span className="text-[#ffef0f]">Cole</span>
          </h1>
          <h1 className=" py-2 text-gray-50">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-50 max-w-[70%] m-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eligendi
            et, ea dicta placeat alias ipsam dolorum repudiandae quod corrupti
            est, rem accusantium doloribus animi. Quae quidem quasi saepe
            sapiente!
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4 ">
            <div className=" rounded-full border-2 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn className="text-[#ffef0f]" />
            </div>
            <div className=" rounded-full border-2 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub className="text-[#ffef0f]" />
            </div>
            <div className=" rounded-full border-2 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail className="text-[#ffef0f]" />
            </div>
            <div className=" rounded-full border-2 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill className="text-[#ffef0f]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default main;
