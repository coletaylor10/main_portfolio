import React from "react";
import Image from "next/image";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const crypto = () => {
  return (
    <div className=" w-full">
      <div className=" w-screen h-[30vh] lg:h-[40vh] relative">
        <div className=" absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absoulute z-1"
          layout="fill"
          objectFit="cover"
          src={cryptoImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-4">
          <h2 className="py-2">Property Finder</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2 className="py-4">Overview</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ipsum
            suscipit non quam, maxime officia nihil nobis eveniet aspernatur
            eius vel, distinctio optio labore explicabo cupiditate, ut minima
            aliquam! Dicta incidunt consectetur ea ad possimus dolorum inventore
            esse accusantium eveniet! Aliquam ex officiis architecto suscipit
            laudantium perspiciatis impedit placeat laborum.
          </p>
          <button className=" px-8 py-2 mt-4 mr-8">Demo</button>
          <button className=" px-8 py-2 mt-4 ">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl border border-[#ffef0f] rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-white py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-white py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-white py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-white py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firebase
              </p>
              <p className="text-white py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Google API
              </p>
              <p className="text-white py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Zillow API
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
            <p className="underline cursor-pointer text-[#ffef0f]">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default crypto;
