import React from "react";
import Image from "next/image";
import netflixImg from "../public/assets/projects/netflix.jpg"
import tmdbImg from "..public/assets/projects/TMDBSearch.jpg"

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
            title="TMDB Search"
            backgroundImg={tmdbImg}
            projectUrl="/tmdb"
          />
          <ProjectItem
            title="Random Password Generator"
            backgroundImg={netflixImg}
            projectUrl="/crypto"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
