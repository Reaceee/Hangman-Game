import React, { useState } from "react";
import HighLight from "./highLight";
import ai from "../assets/Images/skills/ai.jpeg";
import adobe from "../assets/Images/skills/adobe.jpeg";
import node from "../assets/Images/skills/node.jpeg";
import css from "../assets/Images/skills/css.jpeg";
import cs from "../assets/Images/skills/cs.jpeg";
import html from "../assets/Images/skills/html.jpeg";
import js from "../assets/Images/skills/js.jpeg";
import react from "../assets/Images/skills/react.jpeg";

const About = () => {
  const [xy, setxy] = useState([0, 0]);
  const [info, setInfo] = useState("");

  window.addEventListener("mousemove", (e) => {
    setxy([e.clientX, e.clientY]);
  });

  return (
    <>
      <div
        style={{ top: xy[1], left: xy[0], opacity: info ? 1 : 0 }}
        className="info duration-200 ease-out w-max fixed top-0 left-0 flex ml-4 mt-8 z-[80] bg-[#0e0e0e92] backdrop-blur-sm border border-[#99999930] min-w-max text-white text-[.65rem] p-2 rounded"
      >
        {info}
      </div>

      <div className="section about flex flex-col w-full items-center">
      <p className="text-3xl pt-16 pb-8 md:text-4xl lg:text-[4rem] ">
            About <HighLight text="Me" />{" "}
          </p>
        <p className="text-md max-w-[750px] text-gry  pb-8 text-center px-4 md:pt-10">
        Get to know me are some of the eye pleasing visuals that I have made that earned me clients satisfation
        </p>

        <div className="w-full flex flex-col lg:flex-row items-center md:py-8 lg:py-20 gap-10 lg:px-20">
          <div className="flex  flex-col lg:items-start items-center w-full lg:w-max">
            <p className="w-full flex items-center justify-center text-center pb-5 font-semibold text-2xl">
              Personal Info
            </p>
            <div className="Table whitespace-nowrap w-full lg:min-w-max text-sm lg:w-1/2 grid md:grid-cols-2 md:rounded-2xl overflow-hidden border border-[#99999930] font-medium">
              <div className="queries hidden md:flex text-gry flex-col">
                <div className="w-full py-5 px-4 lg:px-10 odd:bg-[#99999930] even:bg-[#99999915]">
                  Full Name
                </div>
                <div className="w-full py-5 px-4 lg:px-10 odd:bg-[#99999930] even:bg-[#99999915]">
                  Date of Birth
                </div>
                <div className="w-full py-5 px-4 lg:px-10 odd:bg-[#99999930] even:bg-[#99999915]">
                  Location
                </div>
                <div className="w-full py-5 px-4 lg:px-10 odd:bg-[#99999930] even:bg-[#99999915]">
                  Nationality
                </div>
                <div className="w-full py-5 px-4 lg:px-10 odd:bg-[#99999930] even:bg-[#99999915]">
                  Interests
                </div>
              </div>
              <div className="answers w-full font-semibold flex flex-col">
                <div className="w-full py-5 px-4 lg:px-10 even:bg-[#99999930] odd:bg-[#99999915]">
                  
                  <div className="w-full text-xs pb-2 text-gry font-semibold md:hidden md">
                    Full Name
                  </div>
                  Okoh David
                </div>
                <div className="w-full py-5 px-4 lg:px-10 even:bg-[#99999930] odd:bg-[#99999915]">
                  
                  <div className="w-full text-xs pb-2 text-gry font-semibold md:hidden md">
                    Date of Birth
                  </div>
                  March 10, 2007
                </div>
                <div className="w-full py-5 px-4 lg:px-10 even:bg-[#99999930] odd:bg-[#99999915]">
                  
                  <div className="w-full text-xs pb-2 text-gry font-semibold md:hidden md">
                    Location
                  </div>
                  Yaba, Lagos state, Nigeria
                </div>
                <div className="w-full py-5 px-4 lg:px-10 even:bg-[#99999930] odd:bg-[#99999915]">
                  
                  <div className="w-full text-xs pb-2 text-gry font-semibold md:hidden md">
                    Nationality
                  </div>
                  Nigerian
                </div>
                <div className="w-full py-5 px-4 lg:px-10 even:bg-[#99999930] odd:bg-[#99999915]">
                  
                  <div className="w-full text-xs pb-2 text-gry font-semibold md:hidden md">
                    Interests
                  </div>
                  Drawing, Playing Guitar
                </div>
              </div>
            </div>
          </div>

          <div className="skillSpinnerPad scale-90 md:scale-100 mt-8 lg:mt-0 relative w-full flex items-center justify-center ">
            <div
              className="w-max text-center absolute left-1/2 top-1/2 flex items-center justify-center pr-6 -translate-y-1/2 -translate-x-1/2 font-semibold text-xl
                      "
            >
              My Package
            </div>
            <div className="skillSpinner w-max h-max mr-6 flex items-center justify-center origin-center">
              <div className="skills rounded-full border-2 border-dashed border-[#99999930] pl-20 w-max items-center justify-center flex gap-20">
                <div className="flex flex-col gap-10">
                  <img
                    onMouseEnter={() => {
                      setInfo("Adobe Illustrator");
                    }}
                    onMouseLeave={() => {
                      setInfo("");
                    }}
                    src={ai}
                    alt="ai"
                    className="skillIcon hover:p-1 duration-200 ease-out rounded-xl p-1.5 w-10 h-10 bg-white"
                  />
                  <img
                    onMouseEnter={() => {
                      setInfo("MongoDB");
                    }}
                    onMouseLeave={() => {
                      setInfo("");
                    }}
                    src={adobe}
                    alt="adobe"
                    className="skillIcon hover:p-1 duration-200 ease-out rounded-xl p-1.5 w-10 h-10 bg-white -ml-20"
                  />
                  <img
                    onMouseEnter={() => {
                      setInfo("Node JS");
                    }}
                    onMouseLeave={() => {
                      setInfo("");
                    }}
                    src={node}
                    alt="node"
                    className="skillIcon hover:p-1 duration-200 ease-out rounded-xl p-1.5 w-10 h-10 bg-white -ml-20 mt-10"
                  />
                  <img
                    onMouseEnter={() => {
                      setInfo("CSS");
                    }}
                    onMouseLeave={() => {
                      setInfo("");
                    }}
                    src={css}
                    alt="css"
                    className="skillIcon hover:p-1 duration-200 ease-out rounded-xl p-1.5 w-10 h-10 bg-white"
                  />
                </div>

                <div className="flex flex-col gap-10">
                  <img
                    onMouseEnter={() => {
                      setInfo("C#");
                    }}
                    onMouseLeave={() => {
                      setInfo("");
                    }}
                    src={cs}
                    alt="cs"
                    className="skillIcon hover:p-1 duration-200 ease-out rounded-xl p-1.5 w-10 h-10 bg-white"
                  />
                  <img
                    onMouseEnter={() => {
                      setInfo("HTML");
                    }}
                    onMouseLeave={() => {
                      setInfo("");
                    }}
                    src={html}
                    alt="html"
                    className="skillIcon hover:p-1 duration-200 ease-out rounded-xl p-1.5 w-10 h-10 bg-white ml-20"
                  />
                  <img
                    onMouseEnter={() => {
                      setInfo("Javascript");
                    }}
                    onMouseLeave={() => {
                      setInfo("");
                    }}
                    src={js}
                    alt="js"
                    className="skillIcon hover:p-1 duration-200 ease-out rounded-xl p-1.5 w-10 h-10 bg-white ml-20 mt-10"
                  />
                  <img
                    onMouseEnter={() => {
                      setInfo("React JS");
                    }}
                    onMouseLeave={() => {
                      setInfo("");
                    }}
                    src={react}
                    alt="react"
                    className="skillIcon hover:p-1 duration-200 ease-out rounded-xl p-1.5 w-10 h-10 bg-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
