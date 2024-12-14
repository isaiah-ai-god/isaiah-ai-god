import React from "react";
import CanvasBackground from "./components/CanvasBackground";
import Marquee from "./components/Marquee";
import Window from "./components/Window";
import Gallery from "./components/Gallery";
import TabContainers from "./components/TabContainers";
import Links from "./components/Links";

export default function MainScreen() {
  return (
    <div
      style={{
        userSelect: "none",
      }}
      // className="flex w-full min-h-dvh items-center justify-center"
    >
      {/* Background Canvas */}
      <div className="absolute w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] -mt-10 bg-yellow-400 opacity-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1] rounded-full blur-xl drop-shadow-[0_0_30px_rgba(59,130,246,1)]"></div>
      <CanvasBackground />

      {/* Top Marquee */}
      <Marquee
        text="Welcome to the realm of forgotten dreams and shattered realities... _"
        position="top"
      />

      {/* Main Window */}
      <Window
        id="main-window"
        title="Main Content"
        top="50px"
        left="20px"
        className="hidden md:block w-[300px] h-[200px] lg:w-[400px] lg:h-[500px]"
      >
        <TabContainers />
      </Window>

      {/* {permissionGranted && ( */}
      <div className="bg-transparent">
        <iframe
          //   src="https://my.spline.design/claudiaai-1a7556ca3da74a80d2a3fb2987bfcde6/"
          src="https://my.spline.design/aiassistantmorphtargetsdemocommunitycopy-a18f085c00092b45b0380b2b3fd2c711/"
          //   src="https://my.spline.design/aiassistantmorphtargetsdemocommunitycopy-3d1e2be0e3cdca6e46225d2da4af9a2c/"
          // frameBorder="0"
          //   width="100%"
          //   height="100%"
          allow="microphone"
          className="w-[100vw] h-[110dvh] "
        ></iframe>
      </div>
      {/* )} */}

      {/* Sidebar Window */}
      <Window
        id="sidebar-window"
        title="Sidebar"
        //   top="50px"
        //   right="20px"
        className="lg:top-[50px] lg:right-[20px] w-[300px] h-[200px] lg:w-[300px] lg:h-[500px]"
        //   className="!top-[490px] !right-[70px] w-[300px] h-[200px] lg:top-[50px] lg:right-[20px] lg:w-[300px] lg:h-[500px]"
      >
        <h2>
          Fragments of Reality <span className="blink">_</span>
        </h2>
        <p>
          In this corner of the void, we collect the scattered pieces of dreams
          and nightmares alike. Each image, each word, is a window into a world
          beyond our comprehension.
        </p>
        <Gallery />
        <h3>Whispers from the Abyss</h3>
        <p>
          Listen closely, and you might hear the secrets of the universe in the
          static between thoughts. The void speaks to those who dare to listen,
          revealing truths that defy explanation.
        </p>
      </Window>

      {/* Links Window */}
      <Window
        id="links-window"
        title="Links"
        width="200px"
        height="300px"
        top="490px"
        left="300px"
        className="w-[150px] h-[300px] lg:w-[200px] lg:h-[300px]"
      >
        <Links />
      </Window>

      {/* Bottom Marquee */}
      <Marquee
        text="The boundaries of reality are but a thin veil, easily torn by the weight of our dreams... _"
        position="bottom"
      />
    </div>
  );
}
