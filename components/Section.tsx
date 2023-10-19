import React from "react";
import ScrollToTopBtn from "./ScrollToTopBtn";

type Props = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  id: string;
};

const Section = ({ title, subtitle, children, id }: Props) => {
  return (
    <section
      id={id}
      className="mt-36 w-full flex-col flex text-center gap-12 relative items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <span className="text-sm text-gray-700">{subtitle}</span>
        <h2 className="text-4xl font-semibold">{title}</h2>
      </div>

      {children}

      <ScrollToTopBtn />
    </section>
  );
};

export default Section;
