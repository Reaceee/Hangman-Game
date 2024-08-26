import React, { useEffect } from "react";
import AOS from "aos";

import HighLight from "./highLight";

const jobCard = (props) => {
  useEffect(() => {
    AOS.init({
      // Global settings:
      duration: 1000, // Animation duration in milliseconds
      easing: "ease", // Easing function
      once: false, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <>
      <div className="jobDuration text-center font-bold mb-4 w-max border border-[#99999960] rounded-full text-xs p-2 uppercase mt-6 px-4 flex items-center justify-center gap-2">
        {props.duration[0]}{" "}
        <div className="line w-8 border-t border-[#99999960] border-dashed"></div>{" "}
        {props.duration[1]}
      </div>
      <p className="JobTitle bg-red-00 leading-tight max-w-[750px] text-center text-3xl font-medium">
        <b>{props.title}</b>{" "}
        <span className="text-gry">at {props.company}</span>
      </p>
      <p
        style={{ letterSpacing: "4px" }}
        className="mt-6 und text-sm font-semibold"
      >
        ACHIEVEMENTS
      </p>
      <ul className="achievments text-center w-full p-4 max-w-[750px] list-inside">
        {props.achievements.map((ach) => (
          <li
            key={props.id + ach}
            data-aos="fade-up"
            className="achList border-b last-of-type:border-b-0 border-[#99999960] flex flex-col items-center gap-4 list-none text-[#99999] text-xs py-4"
          >
            <div
              className={`achNum font-bold rounded-full w-6 h-6 text-xs items-center justify-center duration-200 ease-out flex ${
                props.dark ? "bg-wht text-blk" : "bg-blk text-wht"
              }`}
            >
              {props.achievements.indexOf(ach)} 
            </div>
            Hele
            {props.id + ach}
          </li>
        ))}
      </ul>
    </>
  );
};

export default jobCard;
