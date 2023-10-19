import React from "react";
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";
import { MdMail } from "react-icons/md";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="mt-36 border-t-2 border-gray-700 flex items-center justify-around py-6"
    >
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
    </motion.div>
  );
};

export default Footer;
