import React, { useState } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";

const ScrollUp = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  window.addEventListener("scroll", toggleVisible);

  return (
    <div>
      <button
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
        className="fixed right-[15px] lg:right-[40px] bottom-[105px] lg:bottom-[20px] text-4xl lg:text-5xl z-1 cursor-pointer text-[#00C4F0]"
      >
        <IoIosArrowDropupCircle />
      </button>
    </div>
  );
};

export default ScrollUp;
