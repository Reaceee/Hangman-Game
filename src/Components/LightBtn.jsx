import React, { useState, useRef } from 'react';

const HoverButton = () => {
  const [circleStyle, setCircleStyle] = useState({
    opacity: 0,
    transform: 'scale(0)',
    x: 0,
    y: 0,
  });

  const buttonRef = useRef(null);

  const handleMouseMove = (event) => {
    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setCircleStyle({
      opacity: 1,
      transform: 'scale(1)',
      x,
      y,
    });
  };

  const handleMouseLeave = () => {
    setCircleStyle((prevStyle) => ({
      ...prevStyle,
      opacity: 0,
      transform: 'scale(0)',
    }));
  };

  return (
    <button
      ref={buttonRef}
      className="relative w-full sm:w-max inline-block py-2 h-16 px-[1.6rem] text-sm font-semibold bg-[#99999920] hover:bg-[#99999930] duration-500 opacity-50 hover:opacity-100  rounded-full overflow-hidden cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      Learn with me
      <div
        className="glow absolute w-[150px] h-[150px] blur-2xl bg-[#99999915] rounded-full pointer-events-none transition-all duration-200 ease-out"
        style={{
          top: `${circleStyle.y}px`,
          left: `${circleStyle.x}px`,
          opacity: circleStyle.opacity,
          transform: `translate(-50%, -50%) ${circleStyle.transform}`,
        }}
      ></div>
    </button>
  );
};

export default HoverButton;
