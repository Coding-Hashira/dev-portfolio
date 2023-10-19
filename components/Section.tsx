import React from "react";
import ScrollToTopBtn from "./ScrollToTopBtn";
import { motion } from "framer-motion";

type Props = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  id: string;
};

const Section = ({ title, subtitle, children, id }: Props) => {
  return (
    <div id={id}>
      <motion.section
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-32 w-full flex-col flex text-center gap-12 relative items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="text-sm text-gray-700">{subtitle}</span>
          <h2 className="text-4xl font-semibold">{title}</h2>
        </div>

        {children}

        <ScrollToTopBtn />
      </motion.section>
    </div>
  );
};

export default Section;
