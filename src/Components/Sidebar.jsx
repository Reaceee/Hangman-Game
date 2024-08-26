import React from "react";
import AllBoxes from "./allBoxes";
import info from "../assets/Images/SVG/info.svg";
import briefcase from "../assets/Images/SVG/briefcase.svg";
import proj from "../assets/Images/SVG/proj.svg";
import preview from "../assets/Images/SVG/preview.svg";

const Sidebar = (props) => {
  return (
    <div className="SideBar lg:hidden">
      {/* --- Purple curtain intro --- */}

      <div
        className={`w-full ${
          props.active ? "h-full" : "h-0"
        } duration-500 ease-out fixed top-0 left-0 opacity-30 bg-purp z-[15]`}
      ></div>
      <div
        className={`w-full ${
          props.active ? "h-full" : "h-0"
        } duration-500 delay-200 ease-out fixed top-0 left-0 opacity-30 bg-purp z-[15]`}
      ></div>
      <div
        className={`w-full ${
          props.active ? "h-full" : "h-0"
        } duration-500 delay-500 ease-out fixed top-0 left-0 opacity-30  bg-purp z-[15]`}
      ></div>

      {/* --- Purple curtain outro --- */}

      <div
        className={`w-full ${
          props.active ? "h-full" : "h-0"
        } duration-500 delay-[0.8s] ease-out fixed top-0 left-0 opacity-30 bg-purp z-[15]`}
      ></div>
      <div
        className={`w-full ${
          props.active ? "h-full" : "h-0"
        } duration-500 delay-[1s] ease-out fixed top-0 left-0 opacity-30 bg-purp z-[15]`}
      ></div>
      <div
        className={`w-full ${
          props.active ? "h-full" : "h-0"
        } duration-500 delay-[1.2s] ease-out fixed top-0 left-0 opacity-30  bg-purp z-[15]`}
      ></div>

      <div
        className={`sidebar-main px-4 sm:px-8 md:px-20 w-full ${
          props.active ? "h-full pt-[6rem] pb-0" : "h-0 py-0"
        } duration-500 delay-500 flex flex-col overflow-x-hidden overflow-y-scroll items-center ease-out fixed top-0 left-0 ${
          props.dark ? "bg-[#000000] text-wht" : "bg-wht text-blk"
        }  z-[15]`}
      >
        {/* <AllBoxes scale={props.active} /> */}
        <div className="allTabs w-full mb-8">
          <div className="tab text-lg flex items-center gap-8 text-gry hover:text-inherit duration-300 ease-out cursor-pointer hover:gap-12 font-medium py-6 border-b border-[#99999930]">
            <img
              src={info}
              alt=""
              className="w-6 h-6 opacity-60 object-fit object-center"
            />
            About
          </div>

          <div className="tab text-lg flex items-center gap-8 text-gry hover:text-inherit duration-300 ease-out cursor-pointer hover:gap-12 font-medium py-6 border-b border-[#99999930]">
            <img
              src={briefcase}
              alt=""
              className="w-6 h-6 opacity-60 object-fit object-center"
            />
            Experience
          </div>

          <div className="tab text-lg flex items-center gap-8 text-gry hover:text-inherit duration-300 ease-out cursor-pointer hover:gap-12 font-medium py-6 border-b border-[#99999930]">
            <img
              src={proj}
              alt=""
              className="w-6 h-6 opacity-60 object-fit object-center"
            />
            Projects
          </div>

          <div className="tab text-lg flex items-center gap-8 text-gry hover:text-inherit duration-300 ease-out cursor-pointer hover:gap-12 font-medium py-6 border-b border-[#99999930]">
            <img
              src={preview}
              alt=""
              className="w-6 h-6 opacity-60 object-fit object-center"
            />
            Showcase
          </div>
        </div>

        <button
          className={`${
            props.dark ? "bg-wht text-blk" : "bg-blk text-wht"
          } p-4 duration-200 font-black text-sm  flex items-center w-full text-center justify-center mt-auto mb-4`}
          to=""
        >
          GET IN TOUCH
        </button>

        <div className="mb-4 text-xs text-[#99999990] border-t  py-2 border-[#99999940] w-full text-center font-semibold ">Copyright &copy; 2023, Ace Creative. All rights reserved</div>
      </div>
    </div>
  );
};

export default Sidebar;
