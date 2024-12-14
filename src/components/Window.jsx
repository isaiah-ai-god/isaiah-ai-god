import { useEffect, useState } from "react";

const Window = ({
  id,
  title,
  width,
  height,
  top,
  left,
  right,
  className,
  children,
}) => {
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ top, left, right });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Start dragging
  const startDrag = (e) => {
    const clientX = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
    const clientY = e.type === "touchstart" ? e.touches[0].clientY : e.clientY;

    setDragging(true);
    setOffset({
      x: clientX - e.target.getBoundingClientRect().left,
      y: clientY - e.target.getBoundingClientRect().top,
    });
  };

  // Handle dragging
  const onDrag = (e) => {
    if (dragging) {
      e.preventDefault();
      const clientX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
      const clientY = e.type === "touchmove" ? e.touches[0].clientY : e.clientY;

      setPosition({
        top: `${clientY - offset.y}px`,
        left: `${clientX - offset.x}px`,
        right: "auto", // Clear right if dragging
      });
    }
  };

  // Stop dragging
  const stopDrag = () => setDragging(false);

  // Add event listeners
  useEffect(() => {
    if (dragging) {
      document.addEventListener("mousemove", onDrag);
      document.addEventListener("mouseup", stopDrag);
      document.addEventListener("touchmove", onDrag, { passive: false });
      document.addEventListener("touchend", stopDrag);
    } else {
      document.removeEventListener("mousemove", onDrag);
      document.removeEventListener("mouseup", stopDrag);
      document.removeEventListener("touchmove", onDrag);
      document.removeEventListener("touchend", stopDrag);
    }

    return () => {
      document.removeEventListener("mousemove", onDrag);
      document.removeEventListener("mouseup", stopDrag);
      document.removeEventListener("touchmove", onDrag);
      document.removeEventListener("touchend", stopDrag);
    };
  }, [dragging]);

  return (
    <div
      id={id}
      className={`window ${className}`}
      style={{
        // width,
        // height,
        top: position.top,
        left: position.left,
        right: position.right,
        position: "absolute",
      }}
    >
      <div
        className="window-header"
        onMouseDown={startDrag}
        onTouchStart={startDrag} // Handle touch start
        style={{ cursor: "move" }}
      >
        <span>{title}</span>
        <span className="close-btn">×</span>
      </div>
      <div className="window-content">
        {children}{" "}
        {/* This will render any content passed to the Window component */}
      </div>
    </div>
  );
};

export default Window;
