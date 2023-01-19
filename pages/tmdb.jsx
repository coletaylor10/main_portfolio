import React from "react";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import tmdbImg from "../public/assets/projects/TMDBSearch.jpg"

const tmdb = () => {
  return (
    <div className=" w-full">
      <div className=" w-screen h-[30vh] lg:h-[40vh] relative">
        <div className=" absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absoulute z-1"
          layout="fill"
          objectFit="cover"
          src={tmdbImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-4">
          <h2 className="py-2">TMDB Search</h2>
          <h3>Next.js / React / Tailwind</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2 className="py-4">Overview</h2>
          <p>
            I have created a website that displays and allows you to search for movies on TMDB using their API. I used the TMDB documentation to learn how to setup the API requests and then turn that data into a JSON file which i could manipulate into something the website could use.
          </p>
          <button className=" px-8 py-2 mt-4 mr-8">
          <Link href="https://tmdb-search.vercel.app/">Demo</Link>
            </button>
          <button className=" px-8 py-2 mt-4 ">
            <Link href="https://github.com/coletaylor10/tmdb_search">Code</Link>
            </button>
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
                <RiRadioButtonFill className="pr-1" /> Vercel
              </p>
              <p className="text-white py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> TMDB API
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

export default tmdb;
