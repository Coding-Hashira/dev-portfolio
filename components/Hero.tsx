import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full z-10 gap-20 h-[80vh] flex items-center justify-center">
      <Image
        src="/icon.png"
        height={350}
        width={350}
        className="rounded-full border-2 border-black"
        alt="Jashan Mago Avatar"
      />

      <div className="flex text-center flex-col gap-0.5">
        <span className="">Hello, I&rsquo;m</span>
        <h1 className="text-4xl font-semibold">Jashan Mago</h1>
        <h3 className="text-2xl font-medium">Frontend Developer</h3>
        <div className=" mt-6">
          <button className="w-4/5 transition-all active:bg-[#e7e7e7] duration-[250ms] border-black border-2 hover:text-black hover:bg-white rounded-full bg-black text-white py-2">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
