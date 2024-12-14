import React from "react";

const Marquee = ({ text, position }) => {
  return (
    <div className={`text-white marquee ${position}-marquee`}>
      <marquee
        behavior="scroll"
        direction={position === "top" ? "left" : "right"}
      >
        {text} <span className="blink">_</span>
      </marquee>
    </div>
  );
};

export default Marquee;
