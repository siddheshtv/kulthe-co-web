import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const taglineRef = useRef(null);

  useEffect(() => {
    if (isHovered) {
      gsap.to(taglineRef.current, {
        duration: 0.5,
        y: 0,
        opacity: 1,
        ease: "back.out(2)",
      });
    } else {
      gsap.to(taglineRef.current, {
        duration: 0.5,
        y: 20,
        opacity: 0,
        ease: "power2.inOut",
      });
    }
  }, [isHovered]);

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    <div className="py-8 px-16 top-0 left-0 fixed w-full z-10">
      <nav className="flex items-center justify-between">
        <div className="flex space-x-3 items-center">
          <a href="/" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
            <h1 className="text-xl font-medium" id="logo">
              Kulthe.
            </h1>
          </a>
          <h1
            ref={taglineRef}
            className="text-lg text-gray-500"
            id="tagline"
            style={{
              opacity: 0,
              transform: "translateY(20px)",
            }}
          >
            — AI Reimagined
          </h1>
        </div>
        <div>
          <ul className="flex space-x-4 items-center">
            <a href="/" className="nav-btn">
              <li>Work</li>
            </a>
            <a href="/" className="nav-btn">
              <li>About</li>
            </a>
            <a href="/">
              <li className="primary-btn">Let's talk</li>
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
