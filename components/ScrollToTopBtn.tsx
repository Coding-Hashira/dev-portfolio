import React from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const ScrollToTopBtn = () => {
  return (
    <button
      onClick={() => window.scrollTo(0, 0)}
      className="absolute bottom-2 right-4 bg-white rounded-full border border-black"
    >
      <MdKeyboardDoubleArrowUp className="p-2 box-content" />
    </button>
  );
};

export default ScrollToTopBtn;
