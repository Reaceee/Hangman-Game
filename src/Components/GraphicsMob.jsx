import React, { useRef, useState, useEffect } from "react";
import close from "../assets/Images/SVG/close.svg";
import eye from "../assets/Images/SVG/eye.svg";
import dodo from "../assets/Images/graphics/dodo.jpg";
import nop from "../assets/Images/graphics/nop.jpg";
import roc from "../assets/Images/graphics/roc.png";
import pine from "../assets/Images/graphics/pine.png";
import lux from "../assets/Images/graphics/lux.png";
import xy from "../assets/Images/graphics/xy.png";
import lmm from "../assets/Images/graphics/lmm.png";
import vncedor from "../assets/Images/graphics/vncedor.png";
import spicy from "../assets/Images/graphics/spicy.png";
import worship from "../assets/Images/graphics/worship.png";
import { PiHandGrabbingBold } from "react-icons/pi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Graphic = () => {
  const GraphicCont = useRef(null);
  const [graphicTut, setgraphicTut] = useState(1);
  const [curView, setcurView] = useState(null);
  const allWorks = [
    {id:"mob-xy", img: xy, delay: "" },
    {id:"mob-spicy", img: spicy, delay: "delay-[.2s]" },
    {id:"mob-roc", img: roc, delay: "delay-[.4s]" },
    {id:"mob-pine", img: pine, delay: "delay-[.6s]" },
    {id:"mob-lux", img: lux, delay: "delay-[.8s]" },
    {id:"mob-dodo", img: dodo, delay: "delay-[.10s]" },
    {id:"mob-lmm", img: lmm, delay: "delay-[.12s]" },
    {id:"mob-nop", img: nop, delay: "delay-[.16s]" },
    {id:"mob-vncedor", img: vncedor, delay: "delay-[.14s]" },
    {id:"mob-worship", img: worship, delay: "delay-[.18s]" },
  ];
  // const GraphicWidth = GraphicCont.current.clientWidth

  return (
    <>
      <div className="w-full md:hidden mt-8 block">
        <div
          onClick={() => {
            setcurView(null);
          }}
          className={`Viewer items-start flex justify-center w-full h-full bg-[#0e0e0e8e] fixed top-0 md:px-4 overflow-y-scroll md:py-16 backdrop-blur-md duration-150 ease-out left-0 z-[30] ${
            curView ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          <img
            title="Close"
            src={close}
            alt=""
            className="view absolute shadow-xl z-[3] w-10 h-10 p-1 duration-200 bg-[#99999930] hover:shadow-lg hover:bg-[#99999990] cursor-pointer rounded-full top-4 right-4"
          />

          <img
            src={curView}
            alt=""
            className={`viewingImg h-auto md:w-[80%] grow-0 md:max-w-[550px] ${curView ? "scale-100 opacity-100" : "scale-150 opacity-0"} my-auto max-w-full duration-150 ease-in`}
          />
        </div>

        <div className="Graphic grid grid-cols-3 md:grid-cols-2 gap-1 p-1 w-full relative font[4rem] h-max duration-500 ease-out">
          {allWorks.map((work) => (
            <div
              key={work.id}
              onClick={() => {
                setcurView(work.img);
              }}
              style={{ backgroundImage: `url("${work.img}")` }}
              className={`graphic box duration-500 w-full aspect-square min-h-[100px] md:h-[300px] shrink-0 relative bg-cover bg-center bg-[#0e0e0e66] bg-blend-overlay flex items-end rounded-2xl p-4 snap-center`}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Graphic;
