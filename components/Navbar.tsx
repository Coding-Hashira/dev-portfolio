import { navLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="z-50 relative flex justify-center sm:justify-around items-center h-[15vh]">
      <Link href="/">
        <motion.h1
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl font-medium"
        >
          Jashan Mago
        </motion.h1>
      </Link>

      <motion.ul
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="list-none hidden sm:flex gap-6 md:gap-8"
      >
        {navLinks.map((link) => (
          <li
            key={link.id}
            className="text-lg inline-block hover-underline-animation relative list-none"
          >
            <a href={link.url}>{link.title}</a>
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Navbar;
