import React from "react";
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";
import { MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="mt-36 border-t-2 border-black flex items-center justify-around py-6">
      <span>© 2023 Jashan Mago</span>

      <div className="flex items-center gap-4">
        <a href="https://twitter.com/coding_hashira">
          <AiOutlineTwitter className="w-6 h-6 transition-all duration-[250ms] hover:text-gray-700" />
        </a>
        <a href="https://github.com/Coding-Hashira">
          <AiOutlineGithub className="w-6 h-6 transition-all duration-[250ms] hover:text-gray-700" />
        </a>
        <a href="mailto:jashanmago6@gmail.com">
          <MdMail className="w-6 h-6 transition-all duration-[250ms] hover:text-gray-700" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
