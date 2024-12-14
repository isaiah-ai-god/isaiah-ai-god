import React, { useState } from "react";

const TabContainers = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="tab-container">
        <div
          className={`tab ${activeTab === "tab1" ? "active" : ""}`}
          data-tab="tab1"
          onClick={() => handleTabClick("tab1")}
        >
          Tab 1
        </div>
        <div
          className={`tab ${activeTab === "tab2" ? "active" : ""}`}
          data-tab="tab2"
          onClick={() => handleTabClick("tab2")}
        >
          Tab 2
        </div>
        <div
          className={`tab ${activeTab === "tab3" ? "active" : ""}`}
          data-tab="tab3"
          onClick={() => handleTabClick("tab3")}
        >
          Tab 3
        </div>
      </div>

      <div
        className={`tab-content ${activeTab === "tab1" ? "active" : ""}`}
        id="tab1"
      >
        <h2>Echoes in the Void</h2>
        <div className="grid-container">
          <div className="grid-item">
            <h3>Whispers</h3>
            <p>
              The shadows dance, forming intricate patterns that tell stories of
              forgotten realms.
            </p>
          </div>
          <div className="grid-item">
            <h3>Echoes</h3>
            <p>
              Voices from the past reverberate through the corridors of time,
              carrying fragments of lost memories.
            </p>
          </div>
          <div className="grid-item">
            <h3>Visions</h3>
            <p>
              Glimpses of alternate realities flicker at the edge of
              consciousness, tantalizing and elusive.
            </p>
          </div>
          <div className="grid-item">
            <h3>Dreams</h3>
            <p>
              In the realm between waking and sleeping, truths reveal themselves
              in cryptic symbols.
            </p>
          </div>
        </div>
      </div>

      <div
        className={`tab-content ${activeTab === "tab2" ? "active" : ""}`}
        id="tab2"
      >
        <h2>Fractured Reflections</h2>
        <p>
          The mirror cracked today, not from any physical force, but from the
          weight of the realities it reflected. In each shard, I saw a different
          version of myself, living lives I could only imagine. Which one is the
          real me? Are any of them real?
        </p>
      </div>

      <div
        className={`tab-content ${activeTab === "tab3" ? "active" : ""}`}
        id="tab3"
      >
        <h2>Timeless Boundaries</h2>
        <p>
          I found an old clock in the attic, its hands spinning wildly, defying
          the laws of time. As I watched, mesmerized, I felt years passing in
          seconds, and seconds stretching into eternities. The boundaries
          between past, present, and future blurred into a singular,
          incomprehensible moment.
        </p>
      </div>
    </>
  );
};

export default TabContainers;
