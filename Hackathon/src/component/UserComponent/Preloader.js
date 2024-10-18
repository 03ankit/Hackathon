import React, { useEffect, useState } from "react";
import '../../script.css';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate loading delay for the preloader effect
    const timer = setTimeout(() => {
      setFadeOut(true); // Start fade-out animation
      setTimeout(() => setLoading(false), 1500); // Delay hiding the preloader for fade-out
    }, 2000); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, []);

  if (!loading) {
    return null; // When loading is done, return null or switch to the main app content.
  }

  return (
    <div className={`preloader ${fadeOut ? "fade-out" : ""}`}>
      <div className="scroll-text">
        <span className="letter">D</span>
        <span className="letter">i</span>
        <span className="letter">h</span>
        <span className="letter">a</span>
        <span className="letter">d</span>
        <span className="letter">i</span>
      </div>
    </div>
  );
};

export default Preloader;