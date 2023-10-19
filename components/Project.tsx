/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

type Props = {
  title: string;
  src: string;
  desc: string;
  githubRepo: string;
  liveSite?: string;
};

const Project = ({ title, src, desc, githubRepo, liveSite }: Props) => {
  return (
    <div className="group transition-all duration-[250ms] hover:bg-[#ebebeb] hover:scale-105 cursor-pointer p-4 flex flex-col gap-4 rounded-sm border-2 border-black ">
      <img src={src} alt="MovieNite" className="w-full rounded-sm" />

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-left text-2xl font-medium">{title}</h3>
          <div className="flex items-center gap-3 flex-row-reverse">
            <a title="GitHub Repository" href={githubRepo} target="_blank">
              <AiFillGithub className="h-6 transition-all duration-[250ms] hover:text-gray-700 w-6" />
            </a>
            {liveSite && (
              <a title="Live Site" href={liveSite} target="_blank">
                <AiOutlineLink className="h-6 transition-all duration-[250ms] hover:text-gray-700 w-6" />
              </a>
            )}
          </div>
        </div>
        <p className="text-justify">{desc}</p>
      </div>
    </div>
  );
};

export default Project;
