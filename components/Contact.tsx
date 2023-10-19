import React from "react";
import Section from "./Section";
import { AiOutlineTwitter } from "react-icons/ai";
import { MdMail } from "react-icons/md";

const Contact = () => {
  return (
    <Section title="Contact Me" subtitle="Get in touch" id="contact">
      <div className="flex mb-12 -mt-4 flex-col gap-6 w-1/2 text-justify">
        <p>
          I&rsquo;m currently available for job or freelance opportunities. If
          you are looking to hire a skilled developer, or just need assistance
          with a specific project, I&apos;m here to help!
        </p>
        <p>
          Feel free to get in touch with me to discuss your requirements or
          potential collaboration.
        </p>
        <div className="flex px-4 w-full mt-5 justify-around gap-6">
          <a
            href="https://twitter.com/coding_hashira"
            className="flex w-[40%] group relative transition-all hover:border-[#1a98e9] hover:bg-[#1a98e9] cursor-pointer duration-[250ms] gap-4 items-center justify-center px-2 border-2 border-black rounded-full py-3"
          >
            <AiOutlineTwitter className="transition-all absolute left-2 group-hover:text-white duration-[250ms] w-8 h-8" />
            <span className="transition-all group-hover:text-white duration-[250ms]">
              Message Me on Twitter
            </span>
          </a>
          <a
            href="mailto:jashanmago6@gmail.com"
            className="flex group relative transition-all hover:border-[#e54033] hover:bg-[#e54033] cursor-pointer w-[40%] duration-[250ms] gap-4 items-center justify-center px-2 border-2 border-black rounded-full  py-3"
          >
            <MdMail className="transition-all absolute left-2 group-hover:text-white duration-[250ms] w-8 h-8" />
            <span className="transition-all group-hover:text-white duration-[250ms]">
              Email Me
            </span>
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
