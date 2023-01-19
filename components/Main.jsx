import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

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
            with a passion for creating visually stunning and user-friendly
            websites. With experience in HTML, CSS, Javascript and React. I have
            a strong understanding of web development principles and the ability
            to create responsive and dynamic websites. Browse through my
            portfolio to see examples of my work and the various technologies I
            have used. Feel free to reach out to me for any web development
            needs or collaboration opportunities!
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4 ">
            <div className=" rounded-full border-2 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="https://www.linkedin.com/in/cole-taylor-288aa3190/">
                <FaLinkedinIn className="text-[#ffef0f]" />
              </Link>
            </div>
            <div className=" rounded-full border-2 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="https://github.com/coletaylor10">
              <FaGithub className="text-[#ffef0f]" />
              </Link>
            </div>
            <div className=" rounded-full border-2 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="mailto:cole10.taylor@gmail.com">
              <AiOutlineMail className="text-[#ffef0f]" />
              </Link>
            </div>
            <div className=" rounded-full border-2 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="https://drive.google.com/file/d/1yJT4taWdejmxuAM-D2eKXZJmFE_guCFA/view?usp=sharing">
              <BsFillPersonLinesFill className="text-[#ffef0f]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default main;
