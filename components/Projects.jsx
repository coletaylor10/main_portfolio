import React from "react";
import Image from "next/image";
import propertyImg from "../public/assets/projects/property.jpg";
import cryptoImg from "../public/assets/projects/crypto.jpg"
import netflixImg from "../public/assets/projects/netflix.jpg"
import twitchImg from "../public/assets/projects/twitch.jpg"
import Link from "next/link";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects"  className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className=" text-xl tracking-widest uppercase text-[#ffef0f] mt-[40px]">
          Projects
        </p>
        <h2 className="py-4">What Ive Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Crypto App"
            backgroundImg={netflixImg}
            projectUrl="/crypto"
          />
          <ProjectItem
            title="Netflix Clone"
            backgroundImg={netflixImg}
            projectUrl="/crypto"
          />
          <ProjectItem
            title="Twitch Clone"
            backgroundImg={twitchImg}
            projectUrl="/crypto"
          />
          <ProjectItem
            title="Property Finder"
            backgroundImg={netflixImg}
            projectUrl="/crypto"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
