import React from "react";
import Image from "next/image";
import AboutImg from "../public/assets/about.jpg";
import {Link} from 'react-scroll'

const About = () => {
  return (
    <div
      id="about"
      className=" w-full md:h-screen p-2 flex items-center py-16 "
    >
      <div className=" max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 ">
        <div className="w-full h-auto m-auto shadow-xl border-2 border-[#ffef0f] rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
        <div className="col-span-2">
          <p className=" pt-6  uppercase text-xl tracking-widest text-[#ffef0f]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className=" py-2 text-gray-50">Im Built different</p>
          <p className=" py-2 text-gray-50">
            I am Cole Taylor, a full stack developer with expertise in multiple
            programming languages and frameworks. I have experience in both
            front-end and back-end development, as well as experience in
            building and deploying applications to production environments. I am
            skilled in creating responsive, user-friendly websites and am
            well-versed in the latest web development trends and technologies. I
            am passionate about coding and I am continuously learning and
            expanding my knowledge and skillset to deliver high-quality software
            solutions.
          </p>
          <p className=" py-2 text-gray-50">
            In addition to my technical skills, I have a strong ability to work
            collaboratively and effectively in a team. I understand the
            importance of clear communication and am able to explain complex
            technical concepts to non-technical stakeholders. I am also able to
            take on leadership roles when necessary and am not afraid to take
            initiative and drive projects forward. I am a creative
            problem-solver and have a keen attention to detail, which helps me
            to deliver high-quality software solutions that meet the needs of
            the users. I am always eager to learn new skills and technologies,
            and I am constantly looking for new challenges and opportunities to
            grow as a developer.
          </p>
          <Link to="projects" spy={true} smooth={true} offset={0} duration={500}>
              <li className="py-2 text-[#ffef0f] underline cursor-pointer list-none">
              See my projects
              </li>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
