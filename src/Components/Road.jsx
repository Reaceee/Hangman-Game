import React, { useState, useRef } from "react";
import rider from "../assets/Images/rider.png";
const Road = () => {
  const riderRef = useRef();
  const [mouseAboveRider, setMouseAboveRider] = useState("straight");
  const [mouseY, setMouseY] = useState(0);
  const [riderY, setRiderY] = useState(0);
  const roadRef = useRef(null);

  const handleMouseMove = (event) => {
    // Get mouse Y position relative to the viewport
    const mouseYPos = event.clientY;

    // Get the Y position of the Rider div relative to the viewport
    if (riderRef.current) {
      const rect = riderRef.current.getBoundingClientRect();
      const riderYPos = rect.top; // Y position of Rider relative to the viewport

      // Update the state with the current Y positions
      setMouseY(mouseYPos);
      setRiderY(riderYPos);
    }
  };

  setTimeout(() => {
    setMouseAboveRider("straight")
  }, 1000)
  return (
    <>
      <div className="text-4xl">
        <p>
          Mouse Y Position: {mouseY}px | Rider Y Position: {riderY}px

          <br />
          {mouseAboveRider}
        </p>
      </div>

{/*       
      <div className="grass w-full overflow-hidden bg-[#2ba472]  h-[400px]">
         */}
      <div
        ref={roadRef}
        onMouseMoveCapture={(e) => {
          setMouseY(e.clientY);
       
        }}
        onClickCapture={(e) => {
          setRiderY(e.clientY);
          if (mouseY < riderY) {
            setMouseAboveRider(true);
          } else if (mouseY > riderY) {
            setMouseAboveRider(false);
          }
          else {
            setMouseAboveRider("straight");
          }
        }}
        className="Road overflow-hidden my-20 h-[250px] flex items-center justify-center w-full bg-blk"
      >
        <img
          ref={riderRef}
          style={{ top: riderY - 40, transform: mouseAboveRider == true? "rotate(30deg)" : mouseAboveRider == false ?  "rotate(-30deg)" : "rotate(0deg)" }}
          src={rider}
          alt=""
          className="rider top-0 right-10 h-20 z-[5] rotate-[30deg] duration-500 delay-50 ease-out absolute"
        />

        <div className="w-full overflow-hidden">
          <div className="roadLines w-full flex gap-8 -ml-[152px]">
            <div className="roadline shrink-0 w-[120px] h-2 bg-wht"></div>
            <div className="roadline shrink-0 w-[120px] h-2 bg-wht"></div>
            <div className="roadline shrink-0 w-[120px] h-2 bg-wht"></div>
            <div className="roadline shrink-0 w-[120px] h-2 bg-wht"></div>
            <div className="roadline shrink-0 w-[120px] h-2 bg-wht"></div>
            <div className="roadline shrink-0 w-[120px] h-2 bg-wht"></div>
            <div className="roadline shrink-0 w-[120px] h-2 bg-wht"></div>
            <div className="roadline shrink-0 w-[120px] h-2 bg-wht"></div>
            <div className="roadline shrink-0 w-[120px] h-2 bg-wht"></div>
            <div className="roadline shrink-0 w-[120px] h-2 bg-wht"></div>
          </div>
        </div>
      </div>

      {/* </div> */}
      <style>
        {`
          @keyframes move-lines {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(152px);
            }
          }
          .roadLines {
            animation: move-lines .5s linear infinite;
          }
        `}
      </style>
    </>

    /*  <div className="relative w-screen h-screen bg-[#191919] overflow-hidden flex items-center justify-center">
      <div className="absolute w-[300%] h-[4px] gap-10 flex animate-move-lines">
        {[...Array(50)].map((_, index) => (
          <div
            key={index}
            className="min-w-[200px] h-[7px] bg-[#f5f5f7] mr-[20px]"
          ></div>
        ))}
      </div>
      <style>
        {`
          @keyframes move-lines {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-move-lines {
            animation: move-lines 5s linear infinite;
          }
        `}
      </style>
    </div> */
  );
};

export default Road;
