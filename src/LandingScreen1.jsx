import React, { useState, useEffect } from "react";
import CanvasBackground from "./components/CanvasBackground";
import "./App.css";
import Typewriter from "typewriter-effect";
import { motion, AnimatePresence } from "framer-motion";

export default function LandingScreen1({ setIsMainScreen }) {
  return (
    <div className="fixed inset-0 flex flex-col gap-5 items-center justify-center text-2xl px-5 text-center drop-shadow-[0_0_3px_#EFBF04]">
      {/* <CanvasBackground /> */}

      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("REDEFINED FOR SOCIAL MEDIA")
            .pauseFor(1000)
            .start();
        }}
        options={{
          cursor: "|", // Custom cursor (underscore)
          delay: 50, // Speed of typing
          deleteSpeed: 50, // Speed of deleting characters (if you want to delete)
          loop: false, // Don't loop the typing effect
        }}
      />

      {/* <div
        onClick={() => setIsLoading(false)}
        className="cursor-pointer mt-10 text-xl hover:underline !static"
      >
        <p>Skip</p>
      </div> */}
    </div>
  );
}
