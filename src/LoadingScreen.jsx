import React, { useState, useEffect } from "react";
import CanvasBackground from "./components/CanvasBackground";
import "./App.css";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [activeCommand, setActiveCommand] = useState(0);

  const commands = [
    "loading_isaiah.exe",
    "accessing_heavenly_circuits",
    "downloading_wisdom",
    "opening_the_heaven_gate",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 1, 100));
    }, 50); // Adjust the speed of the progress bar

    if (progress === 100) {
      clearInterval(interval);
    }

    // Update active command based on progress
    const activeIndex = Math.min(
      Math.floor(progress / (100 / commands.length)),
      commands.length - 1
    );
    setActiveCommand(activeIndex);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="fixed inset-0 flex items-center justify-center ">
      <CanvasBackground />
      <div className="w-[90vw] max-w-lg !static window p-4">
        {/* Terminal Window */}
        <div className="space-y-4">
          {commands.map((cmd, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 text-sm ${
                index <= activeCommand
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              } transition-opacity transition-transform duration-300`}
            >
              <span className="text-[#f8f2df]">$</span>
              <span className="text-gray-300">{cmd}</span>

              {index === activeCommand && (
                <span className="w-2 h-4 bg-[#f8f2df] animate-pulse"></span>
              )}
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-6">
          <div className="h-4 bg-gray-700 relative rounded-md overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-[#f8f2df]"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Percentage */}
        <div className="mt-2 text-right text-gray-400">
          <span className="text-lg">{String(progress).padStart(2, "0")}%</span>
        </div>
      </div>
    </div>
  );
}
