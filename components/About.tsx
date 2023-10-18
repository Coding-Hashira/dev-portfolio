/* eslint-disable @next/next/no-img-element */
import { skills } from "@/constants";
import React from "react";
import ScrollToTopBtn from "./ScrollToTopBtn";

type Props = {};

const About = (props: Props) => {
  return (
    <section
      id="about"
      className="w-full flex-col gap-12 mt-36 flex text-center relative items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <span className="text-sm text-gray-700">Know more</span>
        <h2 className="text-4xl font-semibold">About Me</h2>
      </div>

      <div className="flex flex-col items-center justify-center gap-4">
        <h3 className="text-center font-medium text-xl">About Myself</h3>

        <p className="w-[50%] text-justify">
          I am Jashan Mago, frontend developer from India with expertise in
          Frontend Development and basic understanding of Backend as well as App
          Development. I have a strong passion for learning new technologies and
          keep myself up to date with the latest industry trends and best
          practices.
        </p>
        <p className="w-[50%] text-justify">
          I love collaborating with teams and come up with innovative solutions
          making new connections, and help beginners with figuring out stuff. I
          am for challenging problems and projects. Apart from this, I also
          enjoy currently available for freelance or job opportunities. If you
          want to hire a skilled developer, want guidance regarding your tech
          journey, or just wanna chat,{" "}
          <a
            href="#contact"
            className="relative text-gray-700 hover-underline-animation-gray"
          >
            contact me.
          </a>
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <h3 className="text-center font-medium text-xl">My Tech Skills</h3>

        <div className="grid grid-cols-4 justify-center items-center gap-y-6 gap-x-4 mt-4">
          {skills.map((skill) => (
            <div className="flex items-center gap-2 font-medium" key={skill.id}>
              <img
                key={skill.id}
                src={`/assets/${skill.path}.svg`}
                alt={skill.title}
                className="h-10 w-10"
              />
              <span>{skill.title}</span>
            </div>
          ))}
        </div>
      </div>
      <ScrollToTopBtn />
    </section>
  );
};

export default About;
