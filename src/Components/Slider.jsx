import React, { useRef, useState, useEffect } from "react";
import close from "../assets/Images/SVG/close.svg";
import eye from "../assets/Images/SVG/eye.svg";
import dodo from "../assets/Images/graphics/dodo.jpg";
import nop from "../assets/Images/graphics/nop.jpg";
import roc from "../assets/Images/graphics/roc.png";
import pine from "../assets/Images/graphics/pine.png";
import lux from "../assets/Images/graphics/lux.png";
import pxy from "../assets/Images/graphics/xy.png";
import lmm from "../assets/Images/graphics/lmm.png";
import vncedor from "../assets/Images/graphics/vncedor.png";
import spicy from "../assets/Images/graphics/spicy.png";
import worship from "../assets/Images/graphics/worship.png";
import { PiHandGrabbingBold } from "react-icons/pi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Slider = () => {

  const [xy, setxy] = useState([0, 0]);
  const [info, setInfo] = useState("");

  window.addEventListener("mousemove", (e) => {
    setxy([e.clientX, e.clientY]);
  });


  const sliderCont = useRef(null);
  const [slideTut, setslideTut] = useState(1);
  const [curView, setcurView] = useState(null);
  const allWorks = [
    {id:"xy", img: pxy, delay: "" },
    {id:"spicy", img: spicy, delay: "delay-[.2s]" },
    {id:"roc", img: roc, delay: "delay-[.4s]" },
    {id:"pine", img: pine, delay: "delay-[.6s]" },
    {id:"lux", img: lux, delay: "delay-[.8s]" },
    {id:"dodo", img: dodo, delay: "delay-[.10s]" },
    {id:"lmm", img: lmm, delay: "delay-[.12s]" },
    {id:"nop", img: nop, delay: "delay-[.16s]" },
    {id:"vncedor", img: vncedor, delay: "delay-[.14s]" },
    {id:"worship", img: worship, delay: "delay-[.18s]" },
  ];
  // const sliderWidth = sliderCont.current.clientWidth

  React.useEffect(() => {
    setTimeout(() => {
      const sliderContainer = document.querySelector(".slider-container");
      const slider = document.querySelector(".slider");
      let isDragging = false; // To check if the user is dragging
      let startPos = 0; // The starting X position when dragging begins
      let currentTranslate = 0; // The current translate value of the slider
      let prevTranslate = 0; // The previous translate value before dragging started
      let animationID = 0; // ID for the animation frame

      // Add event listeners for mouse events
      sliderContainer.addEventListener("mousedown", startDrag);
      sliderContainer.addEventListener("mouseup", endDrag);
      sliderContainer.addEventListener("mouseleave", endDrag);
      sliderContainer.addEventListener("mousemove", drag);
      sliderContainer.addEventListener("wheel", scroll);

      function startDrag(event) {
        isDragging = true; // User has started dragging
        startPos = event.clientX; // Record the initial X position
        animationID = requestAnimationFrame(animation); // Start the animation frame
        sliderContainer.classList.add("grabbing"); // Change cursor to grabbing
        slider.style.transition = "none"; // Disable transition during dragging
      }

      function endDrag() {
        isDragging = false; // User has stopped dragging
        cancelAnimationFrame(animationID); // Cancel the animation frame

        // Snap to the nearest slide
        const movedBy = currentTranslate - prevTranslate;
        if (movedBy < -100) {
          currentTranslate = Math.max(
            currentTranslate - 510,
            -(slider.children.length - 1) * 510
          );
        } else if (movedBy > 100) {
          currentTranslate = Math.min(currentTranslate + 510, 0);
        }

        prevTranslate = currentTranslate; // Update the previous translate value
        setSliderPosition(); // Set the slider position
        sliderContainer.classList.remove("grabbing"); // Change cursor back to default
        slider.style.transition = "transform 0.5s ease"; // Re-enable transition for smooth snapping
      }

      function drag(event) {
        if (isDragging) {
          const currentPosition = event.clientX;
          currentTranslate = prevTranslate + currentPosition - startPos; // Calculate the current translate value
          setSliderPosition(); // Set the slider position
        }
      }

      function scroll(event) {
        event.preventDefault(); // Prevent default scroll behavior
        const delta = event.deltaY > 0 ? -1 : 1; // Determine scroll direction
        currentTranslate += delta * 510; // Scroll by one slide width (510px)
        currentTranslate = Math.max(
          Math.min(currentTranslate, 0),
          -(slider.children.length - 1) * 510
        ); // Clamp the translate value
        prevTranslate = currentTranslate; // Update the previous translate value
        setSliderPosition(); // Set the slider position with smooth transition
      }

      function animation() {
        if (isDragging) {
          requestAnimationFrame(animation); // Continue the animation frame if dragging
        }
      }

      function setSliderPosition() {
        slider.style.transform = `translateX(${currentTranslate}px)`; // Update the transform property of the slider
      }
    }, 1000);
  }, []);

  return (
    <>
        {/* <div
          style={{ top: xy[1], left: xy[0], opacity: info ? 1 : 0 }}
          className="info hidden md:flex unsel top-0 left-0 ml-6 mt-2 w-max bg-[#0e0e0e92] backdrop-blur-sm border border-[#99999930] text-white opacity-0 text-[.65rem] p-2 rounded fixed z-[80] duration-300 ease-out"
        >
          {info}
        </div> */}

  
      
      
      <div onMouseEnter={() => {
              setInfo("Hold left mouse button down, then drag sideways or Roll mouse wheel to scroll");
            }}
            onMouseLeave={() => {
              setInfo("");
            }}
            onMouseDown={() => {
              setInfo("");
            }} className="w-full hidden md:flex relative">


          <div
          style={{opacity: info ? 1 : 0 }}
          className="info hidden md:flex unsel ml-6 mt-2 w-max bg-[#0e0e0e92] backdrop-blur-sm text-center border border-[#99999930] text-white opacity-0 text-[.65rem] p-2 rounded bottom-20 left-1/2 -translate-x-1/2 z-[80] absolute duration-300 ease-out"
        >
          {info}
        </div>
        
      <div onClick={() => { setcurView(null)}} className={`Viewer items-start flex justify-center w-full h-full bg-[#0e0e0e8e] fixed top-0 md:px-4 overflow-y-scroll backdrop-blur-md duration-150 ease-out left-0 z-[30] ${curView ? "visible opacity-100": "invisible opacity-0"}`}>
        <img
       
          title="Close"
          src={close}
          alt=""
          className="close fixed shadow-xl w-10 h-10 p-1 duration-200 bg-[#99999930] hover:shadow-lg hover:bg-[#99999990] cursor-pointer rounded-full top-4 right-4"
        />

        <img src={curView} alt="" className="viewingImg h-auto md:w-[80%] grow-0 md:max-w-[550px] my-auto max-w-full" />
      </div>

      <div
        ref={sliderCont}
        onMouseDown={() => {
          setslideTut(0);
        }}
        className="box duration-500 easeout slider-container relative mb-16 flex items-center w-full overflow-x-hidden max-w-full snap-mandatory cursor-grab active:cursor-grabbing snap-x "
      >
        <div
          style={{
            backgroundImage:
              "linear-gradient(90deg, #0e0e0e30 , #0e0e0ea5 50%, #0e0e0e30 100%)",
          }}
          className={`dragger invisible lg:visible absolute justify-center items-center left-0 w-full text-white h-full z-[10] ${
            slideTut ? "flex" : "hidden"
          }`}
        >
          <div className="flex flex-col items-center gap-4 justify-center">
            <div className="Animation flex items-center justify-center">
              <FaArrowLeft color="white" fontSize={50} />
              <div className="w-[300px] flex items-center justify-center">
                <div className="grab w-max h-max">
                  <PiHandGrabbingBold color="white" fontSize={150} />
                </div>
              </div>

              <FaArrowRight color="white" fontSize={50} />
            </div>
            Drag or roll mouse wheel to scroll
            <div className="p-2 border hover:bg-white hover:text-blk duration-100 ease-out border-white rounded-lg text-xs h-max w-max cursor-pointer">
              GOT IT
            </div>
          </div>
        </div>

        <div className="slider flex gap-[10px] w-max font[4rem] will-change-transform duration-500 ease-out">
          {allWorks.map((work) => (
            <div
            key={work.id}
              style={{ backgroundImage: `url("${work.img}")` }}
              className={`slide box duration-500 w-[350px] h-[250px] md:w-[500px] md:h-[300px] shrink-0 relative bg-cover bg-center bg-[#0e0e0e66] bg-blend-overlay flex items-end p-4 snap-center ${work.delay}`}
            >
              <img
                  onClick={() => {
                    setcurView(work.img);
                }}
                
                title="View"
                src={eye}
                alt=""
                className="view absolute w-8 p-1 duration-200 bg-[#99999930] backdrop-blur-md hover:shadow-lg hover:bg-[#99999990] cursor-pointer rounded-full top-4 right-4"
              />

              <p className="text-[4rem] text-wht drop-shadow-md">
                {allWorks.indexOf(work) + 1 < 10
                  ? "0" + (allWorks.indexOf(work) + 1)
                  : allWorks.indexOf(work) + 1}
              </p>
            </div>
          ))}
        </div>
      </div>
    
      </div>
    </>
  );
};

export default Slider;
