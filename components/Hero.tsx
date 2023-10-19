import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 500 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="w-full  z-10 lg:gap-20 gap-12 sm:gap-32 h-[60vh] lg:h-[80vh] flex sm:flex-row flex-col items-center justify-center"
    >
      <Image
        src="/icon.png"
        height={350}
        width={350}
        className="rounded-full lg:w-[350px] w-[250px] h-[250px] lg:h-[350px] border-2 border-black"
        alt="Jashan Mago Avatar"
      />

      <div className="flex text-center flex-col gap-0.5">
        <span className="text-sm">Hello, I&rsquo;m</span>
        <h1 className="lg:text-4xl text-2xl font-semibold">Jashan Mago</h1>
        <h3 className="lg:text-2xl sm:mt-0 mt-1 text-[1.1rem] font-medium">
          Frontend Developer
        </h3>
        <div className="sm:mt-9 mt-6 lg:mt-6">
          <a
            href="#contact"
            className="sm:px-8 px-6 transition-all active:bg-[#e7e7e7] duration-[250ms] border-black border-2 hover:text-black hover:bg-white sm:text-base text-sm  rounded-full bg-black text-white py-2"
          >
            Contact Me
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
