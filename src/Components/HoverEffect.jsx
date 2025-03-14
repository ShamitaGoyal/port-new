import { useState, useEffect } from "react";

export default function HoverEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX - 32, y: e.clientY - 32 });
    };

    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);

    const elements = document.querySelectorAll(".col-md-4");

    elements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* the moving circle */}
      <div
        className={`circle ${visible ? "show" : ""}`}
        style={{ left: position.x, top: position.y }}
      >
        View
      </div>
      <style jsx>{`
  .circle {
    font-family: "Helvetica Neue";
    width: 5rem;
    height: 5rem;
    background-color: black;
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    opacity: 0;
    transform: scale(0);
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1rem;
    z-index: 9999; 
  }
  .circle.show {
    opacity: 1;
    transform: scale(1);
  }

  .col-md-4,
  .col-md-4 * { 
    cursor: none !important; 
  }

`}</style>

      
    </>
  );
}
