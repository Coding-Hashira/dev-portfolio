/* eslint-disable @next/next/no-img-element */
import { styles } from "@/constants";
import React from "react";
import ScrollToTopBtn from "./ScrollToTopBtn";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

type Props = {};

const Projects = (props: Props) => {
  return (
    <section id="projects" className={`${styles.section}`}>
      <div className="flex flex-col items-center justify-center gap-2">
        <span className="text-sm text-gray-700">Browse my</span>
        <h2 className="text-4xl font-semibold">Projects</h2>
      </div>

      <div className="w-[55%] flex justify-center">
        <div className="w-[45%] group transition-all duration-[250ms] hover:bg-[#ebebeb] hover:scale-105 cursor-pointer p-4 flex flex-col gap-4 rounded-sm border-2 border-black ">
          <img
            src="/MovieNite.png"
            alt="MovieNite"
            className="w-full rounded-sm"
          />

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-left text-2xl font-medium">MovieNite</h3>
              <div className="flex items-center gap-3 flex-row-reverse">
                <a
                  title="GitHub Repository"
                  href="https://github.com/Coding-Hashira/MovieNite"
                  target="_blank"
                >
                  <AiFillGithub className="h-6 transition-all duration-[250ms] hover:text-gray-700 w-6" />
                </a>
                <a
                  title="Live Site"
                  href="https://movie-nite.vercel.app/"
                  target="_blank"
                >
                  <AiOutlineLink className="h-6 transition-all duration-[250ms] hover:text-gray-700 w-6" />
                </a>
              </div>
            </div>
            <p className="text-justify">
              MovieNite is a movie browsing platform where you can explore
              trending movies and top movies from various genres, as well as get
              details of those movies. It&rsquo;s built with ReactJS and TMDb
              API. Check it out to find your next movie!
            </p>
          </div>
        </div>
      </div>
      <ScrollToTopBtn />
    </section>
  );
};

export default Projects;
