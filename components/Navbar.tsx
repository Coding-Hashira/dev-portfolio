import { navLinks } from "@/constants";
import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = ({}: Props) => {
  return (
    <div className="z-50 relative flex justify-center sm:justify-around items-center h-[15vh]">
      <Link href="/">
        <h1 className="text-2xl font-medium">Jashan Mago</h1>
      </Link>

      <ul className="list-none hidden sm:flex gap-6 md:gap-8">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className="text-lg inline-block hover-underline-animation relative list-none"
          >
            <a href={link.url}>{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
