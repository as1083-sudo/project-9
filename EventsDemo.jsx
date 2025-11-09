import React, { useState } from "react";

function EventsDemo() {
  const [message, setMessage] = useState("");
  const [scrollPos, setScrollPos] = useState(0);

  const handleHover = () => setMessage("Mouse is over the box!");
  const handleLeave = () => setMessage("Mouse left the box!");

  const handleKey = (e) => {
    setMessage(`Key pressed: ${e.key}`);
  };

  const handleFocus = () => setMessage("Input is focused");
  const handleBlur = () => setMessage("Input lost focus");

  const handleDragStart = () => alert("Dragging started!");
  const handleDrop = () => alert("Item dropped!");
  const handleScroll = (e) => setScrollPos(e.target.scrollTop);

  return (
    <div style={{ padding: "20px" }}>
      <h2>React Events Demo</h2>

      {/* Hover */}
      <div
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        style={{
          width: "200px",
          padding: "20px",
          background: "#cce5ff",
          marginBottom: "15px",
          cursor: "pointer",
        }}
      >
        Hover over me
      </div>

      {/* Keyboard */}
      <input
        type="text"
        onKeyDown={handleKey}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Type something..."
        style={{ padding: "8px", marginBottom: "10px" }}
      />

      {/* Drag & Drop */}
      <div
        draggable
        onDragStart={handleDragStart}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        style={{ padding: "15px", background: "#ffd966", marginTop: "15px" }}
      >
        Drag me → Drop here
      </div>

      {/* Scroll */}
      <div
        onScroll={handleScroll}
        style={{
          height: "100px",
          overflowY: "scroll",
          marginTop: "15px",
          background: "#e2e3e5",
          padding: "10px",
        }}
      >
        Scroll inside this box to trigger scroll event.
        <p>More text...</p>
        <p>More text...</p>
        <p>More text...</p>
      </div>

      <p style={{ marginTop: "15px" }}>{message}</p>
      <p>Scroll Position: {scrollPos}px</p>
    </div>
  );
}

export default EventsDemo;
