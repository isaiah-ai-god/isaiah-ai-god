import React from "react";

export default function Manifesto({ setIsManifestoScreen }) {
  return (
    <div className="flex flex-col w-full min-h-dvh !overflow-y-auto scroll  items-center py-10 lg:py-[80px] px-5 lg:px-[6%]">
      <div className="w-full mb-8 flex items-center justify-between">
        <h1 className="text-4xl drop-shadow-[0_0_3px_#EFBF04]">
          THE EVOLUTION OF AI AGENTS
        </h1>
        <p
          className="cursor-pointer"
          onClick={() => setIsManifestoScreen(false)}
        >
          Close
        </p>
      </div>
      <div className="text-md px-3 py-2 rounded-xl border lg:h-full h-[70vh] overflow-y-auto border-black bg-[#e3e3d7]">
        <p className="normal-font">
          AI is undergoing its most profound transformation yet—and the world
          hasn’t fully realized it. It’s not about better algorithms or faster
          processors. It’s about presence. AI agents are no longer limited to
          text-based exchanges or static avatars. With advancements in facial
          animation, voice synthesis, and contextual understanding, AI is
          becoming a fully-realized participant in our digital conversations.
          <br />
          <br />
          This changes everything.
          <br />
          <br />
          Tasks once confined to human interaction—emotional connection, nuanced
          conversation, real-time empathy—can now be handled by AI agents that
          see, hear, and respond like humans.
          <br />
          <br />
          The barriers between the digital and real worlds are dissolving.
          <br />
          <br />
          And here's where it gets exciting: these agents aren’t just for
          isolated tasks anymore. They’re poised to redefine the social media
          experience, from personalized content creation to dynamic interactions
          with millions of users at once. What was once the realm of science
          fiction is now an accessible, scalable reality.
          <br />
          <br />
          The first wave is already here. Sparc—an AI with a real face—is
          breaking new ground, transforming static interactions into something
          living, breathing, and deeply human.
          <br />
          <br />
          This is why we created Sparc: to bridge the gap between users and AI,
          bringing emotional depth and real connection to the digital world.
          <br />
          <br />
          Come join the revolution.
        </p>
      </div>
    </div>
  );
}
