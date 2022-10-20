import React from "react";
import Image from "next/image";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about"  className=" w-full md:h-screen p-2 flex items-center py-16 ">
      <div className=" max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 ">
        <div className="w-full h-auto m-auto shadow-xl border-2 border-[#ffef0f] rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
        <div className="col-span-2">
          <p className=" pt-6  uppercase text-xl tracking-widest text-[#ffef0f]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className=" py-2 text-gray-50">
             Im Built different
          </p>
          <p className=" py-2 text-gray-50">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, sed
            corrupti esse illum obcaecati debitis, aut est laborum, iusto
            tenetur facilis qui accusamus similique commodi? Sit quo error
            impedit dignissimos sapiente blanditiis sint dolores sed qui fugit,
            harum eius consectetur deleniti dolor vero cumque iure corporis
            veritatis. Excepturi, ab dolorem?
          </p>
          <p className=" py-2 text-gray-50">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
            magnam obcaecati ad! Nam nihil quod nulla repellendus tenetur ab
            deserunt nostrum et modi commodi qui voluptate quia sunt sequi, in
            fugiat cum odio consequuntur voluptas minima magnam? Quod aliquid
            nemo ipsam repellendus est animi deserunt.
          </p>
          <p className="py-2 text-[#ffef0f] underline cursor-pointer">
            Check out my other shizz
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
