import React, { useState, useRef, useEffect } from "react";
import AOS from "aos";
import logo from "../assets/Images/SVG/ace1.svg";
import logo2 from "../assets/Images/SVG/acewht.svg";
import { Link } from "react-router-dom";
import arr from "../assets/Images/SVG/arr.svg";
import creative1 from "../assets/Images/creative1.jpeg";
import creative2 from "../assets/Images/creative2.jpg";
import creative3 from "../assets/Images/creative3.jpeg";
import moon from "../assets/Images/SVG/moon.svg";
import nupat from "../assets/Images/SVG/nupatlogo.svg";
import tick from "../assets/Images/SVG/tick.svg";
import diagArr from "../assets/Images/SVG/arrDiag.svg";
import pulse from "../assets/Images/SVG/pulse.svg";
import arrUp from "../assets/Images/SVG/arrUp.svg";
import exp from "../assets/Images/exp.jpg";
import edu from "../assets/Images/edu.jpg";
import show from "../assets/Images/show.jpg";
import TypeIn from "./TypeIn";
import HighLight from "../Components/highLight";
import "aos/dist/aos.css";
import Slider from "../Components/Slider";
import GraphicsMob from "../Components/GraphicsMob";
import LightBtn from "../Components/LightBtn";
import Sidebar from "../Components/Sidebar";
import JobCard from "../Components/jobCard";
import About from "../Components/About";
import Road from "../Components/Road";


const Home = () => {
  AOS.init();

  useEffect(() => {
    AOS.init({
      // Global settings:
      duration: 1000, // Animation duration in milliseconds
      easing: "ease", // Easing function
      once: false, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  let herotexts = useRef();
  let heroimg = useRef();
  let justheight = useRef();
  let opacity = 100;
  const [scrollTop, setScrollTop] = useState(0);

  const [dark, setDark] = useState(false);
  const [menuVis, setMenu] = React.useState(0);

  window.addEventListener("scroll", () => {
    try {
      setScrollTop(window.scrollY);

      opacity = Math.round(
        ((justheight.current.clientHeight - 50 - window.scrollY) * 100) /
          (justheight.current.clientHeight - 50)
      );
      herotexts.current.style.opacity =
        opacity < 70 ? opacity - 30 + "%" : opacity > 70 ? "100%" : 0;
      heroimg.current.style.opacity =
        opacity < 70 ? opacity - 30 + "%" : opacity > 70 ? "100%" : 0;
      herotexts.current.style.scale = opacity > 0 ? opacity + "%" : 0;
      heroimg.current.style.marginRight =
        "-" + (opacity < 70 ? 550 - opacity + "px" : opacity > 70 ? "0" : 0);
      setOpac(opacity);
    } catch (error) {
      [];
    }
  });

  const [xy, setxy] = useState([0, 0]);
  const [info, setInfo] = useState("");

  window.addEventListener("mousemove", (e) => {
    setxy([e.clientX, e.clientY]);
  });

  const allJobCards = [
    {
      id: "jobId1",
      duration: ["August 2020", "December 2021"],
      title: "Frontend Developer",
      company: "Nupat Technologies",
      achievements: [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quod neque Rerum, dolore1s",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quod neque Rerum, dolores2",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quod neque Rerum, dolore3s",
      ],
    },

    {
      id: "jobId2",
      duration: ["August 2020", "December 2021"],
      title: "Frontend Developer",
      company: "Nupat Technologies",
      achievements: [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quod neque Reruees",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quod neque fesrfg",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quod neque Rgdres",
      ],
    },

    {
      id: "jobId3",
      duration: ["August 2020", "December 2021"],
      title: "Frontend Developer",
      company: "Nupat Technologies",
      achievements: [
        "L1orem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quod neque Rddrggr1",
        "L1orem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quod nequessores2",
        "L1orem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quod neque Rerffre3s",
      ],
    },

    {
      id: "jobId4",
      duration: ["August 2020", "December 2021"],
      title: "Frontend Developer",
      company: "Nupat Technologies",
      achievements: [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. gggg quod neque Rerum, dolore1s",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquarrrte Rerum, dolores2",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alrrtyeque Rerum, dolore3s",
      ],
    },
  ];

  return (
    <>
      <div
        className="justHeight absolute h-[100%] w-[1px]"
        ref={justheight}
      ></div>

      <img
        onMouseEnter={() => {
          setInfo(["Scroll to top", "r"]);
        }}
        onMouseLeave={() => {
          setInfo("");
        }}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          setInfo("");
        }}

        src={arrUp}
        alt="Scroll to top"
        className={`toTop bg-purp fixed border border-[#99999930] shadow-lg opacity-50 hover:opacity-100 duration-200 ease-out ${
          scrollTop >= 200
            ? "bottom-4 lg:bottom-8 visible opacity-0"
            : "-bottom-24 lg:-bottom-[120px] invalid:"
        } ${menuVis? "invisible opacity-0": "visible opacity-100"} duration-200 delay-200 right-4 lg:ring-0 rounded-xl p-2 w-14 z-[50]`}
      />

      <Sidebar active={menuVis} dark={dark} />
      <div
        className={`header font-medium w-full sticky top-0 z-[20] flex items-center duration-500 justify-between shadow-xl shadow-[#6d3ec412] ${
          dark ? "darkDetector text-wht bg-[#000]" : "text-blk bg-[#f5f5f7]"
        } lg:py-0 p-4 md:px-8 lg:px-12 border-b border-[#99999930]`}
      >
        <img src={dark ? logo2 : logo} alt="" className="logo w-[10rem] " />

        <div className="end hidden lg:flex gap-10 items-center">
          <div className="links text-xs flex items-end whitespace-nowrap gap-8">
            <Link className="link relative h-[60px] flex items-center" to="">
              About
            </Link>
            <Link className="link relative h-[60px] flex items-center" to="">
              Experience
            </Link>
            <Link className="link relative h-[60px] flex items-center" to="">
              Projects
            </Link>
            <Link className="link relative h-[60px] flex items-center" to="">
              Showcase
            </Link>
            <Link className="link relative h-[60px] flex items-center" to="">
              Contact
            </Link>
          </div>

          <div
            onMouseEnter={() => {
              setInfo([dark ? "Set theme to Light" : "Set theme to Dark", "l"]);
            }}
            onMouseLeave={() => {
              setInfo("");
            }}
            onClick={() => {
              setDark((prev) => !prev);
              setInfo("");
            }}
            className={`lever  shrink-0 cursor-pointer p-1 w-[44px] border border-[#99999960] rounded-full`}
          >
            <img
              src={moon}
              alt=""
              className={`w-4 ${
                dark ? "ml-4 rotate-[360deg]" : ""
              } duration-500 ease-out opacity-60`}
            />
          </div>

          <button
            className={`${
              dark ? "bg-wht text-blk" : "bg-blk text-wht"
            } p-4 duration-200 font-semibold text-[.65rem] flex items-center`}
            to=""
          >
            GET IN TOUCH
          </button>
        </div>
        
        <div className="reserve-for-mobile-header flex items-center gap-4 lg:hidden w-max">
          
        <div
            onMouseEnter={() => {
              setInfo([dark ? "Set theme to Light" : "Set theme to Dark", "l"]);
            }}
            onMouseLeave={() => {
              setInfo("");
            }}
            onClick={() => {
              setDark((prev) => !prev);
              setInfo("");
            }}
            className={`lever lg:hidden shrink-0 cursor-pointer p-1 w-[44px] border border-[#99999960] rounded-full`}
          >
            <img
              src={moon}
              alt=""
              className={`w-4 ${
                dark ? "ml-4 rotate-[360deg]" : ""
              } duration-500 ease-out opacity-60`}
            />
        </div>
        
        <div
          style={
            menuVis == 1
              ? { transform: "rotate(180deg)" }
              : { transform: "rotate(0deg)" }
          }
          onClick={() => {
            menuVis == 0 ? setMenu(1) : setMenu(0);
          }}
          className="hamb cursor-pointer bg-transparent duration-150 hover:bg-[#99999930] w-10 h-10 rounded-full items-center justify-center flex flex-col lg:hidden gap-1"
        >
          <div
            style={
              menuVis == 1
                ? { transform: "rotate(45deg)", marginBottom: "-6px" }
                : { transform: "rotate(0deg)" }
            }
            className={`line duration-150 w-3 h-[2px] ${
              dark ? "bg-white" : "bg-blk"
            }`}
          ></div>
          <div
            style={
              menuVis == 1
                ? { transform: "rotate(-45deg)" }
                : { transform: "rotate(0deg)" }
            }
            className={`line duration-150 w-3 h-[2px] ${
              dark ? "bg-white" : "bg-blk"
            }`}
          ></div>
        </div>
        
        </div>
        

      </div>
      {/* <div className="w-full underglow h-4"></div> */}

      <div className="body relative">
        <div
          style={{ top: xy[1], left: xy[0], opacity: info ? 1 : 0 }}
          className={`infoPad w-2 h- fixed top-0 left-0 hidden md:flex ml-4 mt-8 z-[80] items-end ${
            info[1] == "l" ? "justify-start" : "justify-end"
          } duration-300 ease-out`}
        >
          <div className="info w-max bg-[#0e0e0e92] backdrop-blur-sm border border-[#99999930] min-w-max text-white text-[.65rem] p-2 rounded">
            {info[0]}
          </div>
        </div>

        <div
          style={{ maxWidth: "100vw", overflow: "hidden" }}
          className="hero flex flex-col lg:flex-row justify-between items-center px-4 md:px-8 lg:px-12 py-20"
        >
          <div
            ref={herotexts}
            className="herotexts origin-center lg:origin-left duration-500 w-full -mt-[2rem]"
          >
            <p
              style={{ letterSpacing: "-3px" }}
              className="herotext text-[3rem] leading-[3.4rem] md:text-[4rem] md:leading-[4.4rem] lg:text-[4.5rem] lg:leading-[4rem]  pb-8"
            >
              You Picture it, I{" "}
              <span className="und font-semibold">create.</span>
            </p>

            <p className="text-gry pr-4 text-xs lg:text-sm leading-loose max-w-[550px] lg:leading-relaxed font-medium">
              I am David Austin, a creative prodigy with extensive experience of
              over 4 years. Ready to handle solo, collab and team projects!
            </p>

            <div className="btns flex-col sm:flex-row items-center font-semibold mt-8 flex lg:items-end gap-2">
              {/* <button className="cta text-sm flex whitespace-nowrap items-center h-16 bg-purp p-4 rounded-xl text-wht">
                Let's talk
                <div className="arrLine w-4 h-[2px] m-3 -mr-1 bg-wht"></div>
                <img src={arr} className="w-1.5 overflow-visible" alt="" />
              </button> */}

              <div className="startPad relative w-full sm:w-max flex items-center">
                <div className=" w-full rounded-full h-full absolute z-[-1] bg-[#432084] opacity-40 top-0 left-0"></div>
                <button
                  onClick={() => {
                    about.current.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                  className="start w-full sm:w-max justify-center sm:justify-start cta flex items-center px-8 h-16"
                >
                  <span className="relative z-2 w-max"> Get to know me</span>
                  <div className="arrLine relative z-2 w-4 h-[2px] m-3 -mr-1 bg-wht"></div>
                  <img
                    src={arr}
                    className="w-1.5 relative z-2 overflow-visible"
                    alt=""
                  />
                </button>
              </div>

              <LightBtn />
            </div>

            <div
              onMouseEnter={() => {
                setInfo([
                  "Certified Full-stack Developer at Nupat Technologies",
                  "l",
                ]);
              }}
              onMouseLeave={() => {
                setInfo("");
              }}
              className="nupat nup hidden lg:flex unsel mt-20 shadow-lg bg-wht p-2 rounded-full w-max items-center h-max text-blk "
            >
              <img
                src={nupat}
                alt="Nupat logo"
                className="w-12 h-12 shrink-0 duration-200"
              />
              <div className="nupInfos whitespace-nowrap object-right text-xs font-semibold flex items-center gap-2">
                NUPAT CERTIFIED
                <img
                  src={tick}
                  alt=""
                  className="tick bg-blk w-4 h-4 p-1 rounded-full duration-500 delay-200"
                />
              </div>
            </div>
          </div>

          <div
            ref={heroimg}
            onMouseLeave={() => {
              setInfo("");
            }}
            className="mockups hidden delay-500 duration-1000 mt-20 lg:mt-0 w-full lg:w-max shrink-0 lg:flex gap-2"
          >
            <div className="flex flex-col gap-2">
              <div
                style={{
                  background: "linear-gradient(transparent, #99999930)",
                }}
                className="grad w-[45vw] lg:w-[200px] rounded-b-2xl h-[172px] object-cover object-center"
              ></div>

              <img
                onMouseEnter={() => {
                  setInfo(["Creative", "l"]);
                }}
                onMouseLeave={() => {
                  setInfo("");
                }}
                src={creative1}
                alt=""
                className="w-[45vw] lg:w-[200px] shrink-0 grayscale hover:grayscale-0 hover:scale-[1.03] duration-500 rounded-2xl h-[350px] object-cover object-center"
              />

              <div
                style={{
                  background: "linear-gradient(#99999930, transparent)",
                }}
                className="grad w-[45vw] lg:w-[200px] rounded-t-2xl h-[172px] object-cover object-center"
              ></div>
            </div>

            <div className="flex flex-col gap-2">
              <img
                onMouseEnter={() => {
                  setInfo(["Innovative", "r"]);
                }}
                onMouseLeave={() => {
                  setInfo("");
                }}
                src={creative2}
                alt=""
                className="w-[45vw] lg:w-[200px] shrink-0 grayscale hover:grayscale-0 hover:scale-[1.03] duration-500 rounded-2xl h-[350px] object-cover object-center"
              />
              <img
                onMouseEnter={() => {
                  setInfo(["Prominent", "r"]);
                }}
                onMouseLeave={() => {
                  setInfo("");
                }}
                src={creative3}
                alt=""
                className="w-[45vw] lg:w-[200px] shrink-0 grayscale hover:grayscale-0 hover:scale-[1.03] duration-500 rounded-2xl h-[350px] object-cover object-center"
              />
            </div>
          </div>

          <div
            onMouseLeave={() => {
              setInfo("");
            }}
            className="mockups flex duration-500 mt-20 lg:mt-0 w-full lg:w-max shrink-0 lg:hidden gap-2"
          >
            <div className="flex flex-col gap-2">
              <div
                style={{
                  background: "linear-gradient(transparent, #99999930)",
                }}
                className="grad w-[45vw] lg:w-[200px] rounded-b-2xl h-[172px] object-cover object-center"
              ></div>

              <img
                onMouseEnter={() => {
                  setInfo("Creative");
                }}
                onMouseLeave={() => {
                  setInfo("");
                }}
                src={creative1}
                alt=""
                className="w-[45vw] lg:w-[200px] shrink-0 grayscale hover:grayscale-0 hover:scale-[1.03] duration-500 rounded-2xl h-[350px] object-cover object-center"
              />

              <div
                style={{
                  background: "linear-gradient(#99999930, transparent)",
                }}
                className="grad w-[45vw] lg:w-[200px] rounded-t-2xl h-[172px] object-cover object-center"
              ></div>
            </div>

            <div className="flex flex-col gap-2">
              <img
                onMouseEnter={() => {
                  setInfo("Innovative");
                }}
                onMouseLeave={() => {
                  setInfo("");
                }}
                src={creative2}
                alt=""
                className="w-[45vw] lg:w-[200px] shrink-0 grayscale hover:grayscale-0 hover:scale-[1.03] duration-500 rounded-2xl h-[350px] object-cover object-center"
              />
              <img
                onMouseEnter={() => {
                  setInfo("Prominent");
                }}
                onMouseLeave={() => {
                  setInfo("");
                }}
                src={creative3}
                alt=""
                className="w-[45vw] lg:w-[200px] shrink-0 grayscale hover:grayscale-0 hover:scale-[1.03] duration-500 rounded-2xl h-[350px] object-cover object-center"
              />
            </div>
          </div>

          <div className=" flex lg:hidden unsel mt-20 shadow-lg bg-wht p-2 rounded-full w-max items-center h-max text-blk ">
            <img
              src={nupat}
              alt="Nupat logo"
              className="w-12 h-12 shrink-0 duration-200"
            />
            <div className="ml-2 whitespace-nowrap object-right text-xs font-semibold flex items-center gap-2">
              NUPAT CERTIFIED
              <img
                src={tick}
                alt=""
                className="tick mr-2 bg-blk w-4 h-4 p-1 rounded-full duration-500 delay-200"
              />
            </div>
          </div>
        </div>

        <div className="w-full mt-16 px-0 md:px-8 p-8 mb-8 lg:mb-[15rem] ">
          <div
            style={{
              backgroundImage: `url("${pulse}")`,
              backgroundSize: "500px",
              backgroundPositionY: "top",
              backgroundPositionX: "center",
            }}
            className="navigate bg-no-repeat bg-center w-full bg-blk text-wht px-2 py-16 pb-8 md:rounded-xl flex lg:h-[450px] items-center flex-col"
          >
            <div className="tiny unsel text-[.65rem] font-bold mb-2">
              NAVIGATE
            </div>
            <p className="max-w-[750px] text-2xl md:text-3xl lg:text-4xl text-center ">
              Move straight to what you <HighLight text="seek" />
            </p>

            <div className="navCards grid-cols-1 lg:px-16 mt-16 w-full grid lg:grid-cols-3 gap-2 lg:gap-6">
              <div data-aos="fade-up" className="box duration-500 ">
                <div
                  style={{ backgroundImage: `url("${edu}")` }}
                  className="navCard cursor-default gap-4 bg-cover flex items-end bg-blend-overlay w-full lg:h-[430px]  h-[250px] bg-[#0e0e0e4d] hover:bg-[#0e0e0e86] duration-500 ease-out lg:hover:scale-105  rounded-3xl shadow-xl "
                >
                  <div className="p-8 px-4 flex w-full gap-2 md:flex-row md:justify-between  md:items-end flex-col items-start ">
                    <div className="details leading-relaxed drop-shadow-lg ">
                      <p className="title text-xl sm:text-2xl lg:text-3xl font-medium">
                        Education
                      </p>
                      <p className="info text-[.65rem] mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reiciendis possimus.
                      </p>
                    </div>

                    <img
                      src={diagArr}
                      alt=""
                      className="w-10 h-10 rounded-full border border-wht p-3 hover:bg-[#ffffff15] duration-200 cursor-pointer overflow-visible"
                    />
                  </div>
                </div>
              </div>

              <div data-aos="fade-up" className="box duration-500 delay-150 ">
                <div
                  style={{ backgroundImage: `url("${exp}")` }}
                  className="navCard cursor-default gap-4 bg-cover flex items-end bg-blend-overlay w-full lg:h-[430px]  h-[250px] bg-[#0e0e0e4d] hover:bg-[#0e0e0e86] duration-500 ease-out lg:hover:scale-105 rounded-3xl shadow-xl "
                >
                  <div className="p-8 px-4 flex w-full gap-2 md:flex-row md:justify-between  md:items-end flex-col items-start ">
                    <div className="details leading-relaxed drop-shadow-lg ">
                      <p className="title text-xl sm:text-2xl lg:text-3xl font-medium">
                        Experience
                      </p>
                      <p className="info text-[.65rem] mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reiciendis possimus.
                      </p>
                    </div>

                    <img
                      src={diagArr}
                      alt=""
                      className="w-10 h-10 rounded-full border border-wht p-3 hover:bg-[#ffffff15] duration-200 cursor-pointer overflow-visible"
                    />
                  </div>
                </div>
              </div>

              <div data-aos="fade-up" className="box duration-500 delay-300 ">
                <div
                  style={{ backgroundImage: `url("${show}")` }}
                  className="navCard cursor-default gap-4 bg-cover flex items-end bg-blend-overlay w-full lg:h-[430px]  h-[250px] bg-[#0e0e0e4d] hover:bg-[#0e0e0e86] duration-500 ease-out lg:hover:scale-105 rounded-3xl shadow-xl "
                >
                  <div className="p-8 px-4 flex w-full gap-2 md:flex-row md:justify-between  md:items-end flex-col items-start ">
                    <div className="details leading-relaxed drop-shadow-lg ">
                      <p className="title text-xl sm:text-2xl lg:text-3xl font-medium">
                        Projects
                      </p>
                      <p className="info text-[.65rem] mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reiciendis possimus.
                      </p>
                    </div>

                    <img
                      src={diagArr}
                      alt=""
                      className="w-10 h-10 rounded-full border border-wht p-3 hover:bg-[#ffffff15] duration-200 cursor-pointer overflow-visible"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <TypingEffect /> */}

        <About />

        <div className="section mt-8 experience mb-40 box w-full flex items-center  flex-col exp">
          <p className="text-3xl pt-16 pb-8 md:text-4xl lg:text-[4rem] ">
            My <HighLight text="Experience" />{" "}
          </p>

          {allJobCards.map((jobCard) => (
            <div
              key={jobCard.id}
              data-aos="fade-up"
              className="expBlock px-4 flex flex-col items-center text-lef"
            >
              <div
                data-aos="zoom-in-down"
                data-aos-delay="300"
                style={{
                  backgroundImage: "linear-gradient(transparent, #99999960",
                }}
                className="longLine w-1.5 h-[220px]"
              ></div>

              <JobCard
                id={jobCard.id}
                key={jobCard.id}
                title={jobCard.title}
                duration={jobCard.duration}
                achievements={jobCard.achievements}
                company={jobCard.company}
                dark={dark}
              />
            </div>
          ))}

          {/* <div
            data-aos="fade-up"
            className="expBlock px-4 flex flex-col items-center text-lef"
          >
            <div
              data-aos="zoom-in-down"
              data-aos-delay="300"
              style={{
                backgroundImage: "linear-gradient(transparent, #99999960",
              }}
              className="longLine w-1.5 h-[220px]"
            ></div>

            <div className="jobDuration text-center font-black mb-4 w-max border border-[#99999960] rounded-full text-xs p-2 uppercase mt-6 px-4">
              August 2024 - July 2025{" "}
            </div>
            <p className="Job text-center text-3xl font-medium">
              Junior Front-end Developer at Nupat Technologies
            </p>
            <ul className="achievments text-center w-full p-4 max-w-[750px] list-inside">
              <li className="achList border-b border-[#99999960] list-none text-[#999999] text-sm py-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam quod neque cumque ipsum perferendis odit aspernatur!
                Rerum, dolores.
              </li>
              <li className="achList border-b border-[#99999960] list-none text-[#999999] text-sm py-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam quod neque cumque ipsum perferendis odit aspernatur!
                Rerum, dolores.
              </li>
              <li className="achList border-b border-[#99999960] list-none text-[#999999] text-sm py-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam quod neque cumque ipsum perferendis odit aspernatur!
                Rerum, dolores.
              </li>
            </ul>
          </div>

          <div
            data-aos="fade-up"
            className="expBlock px-4 flex flex-col items-center text-lef"
          >
            <div
              data-aos="zoom-in-down"
              data-aos-delay="300"
              style={{
                backgroundImage: "linear-gradient(transparent, #99999960",
              }}
              className="longLine w-1.5 h-[220px]"
            ></div>

            <div className="jobDuration text-center font-black mb-4 w-max border border-[#99999960] rounded-full text-xs p-2 uppercase mt-6 px-4">
              August 2024 - July 2025{" "}
            </div>
            <p className="Job text-center text-3xl font-medium">
              Junior Front-end Developer at Nupat Technologies
            </p>
            <ul className="achievments text-center w-full p-4 max-w-[750px] list-inside">
              <li className="achList border-b border-[#99999960] list-none text-[#999999] text-sm py-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam quod neque cumque ipsum perferendis odit aspernatur!
                Rerum, dolores.
              </li>
              <li className="achList border-b border-[#99999960] list-none text-[#999999] text-sm py-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam quod neque cumque ipsum perferendis odit aspernatur!
                Rerum, dolores.
              </li>
              <li className="achList border-b border-[#99999960] list-none text-[#999999] text-sm py-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam quod neque cumque ipsum perferendis odit aspernatur!
                Rerum, dolores.
              </li>
            </ul>
          </div> */}
        </div>

        <div className="section projects mb-20 box w-full flex items-center  flex-col exp">
          <p className="text-3xl pt-16 pb-4 md:text-4xl lg:text-[4rem] ">
            Design <HighLight text="Showcase" />{" "}
          </p>
          <p className="text-md max-w-[750px] text-gry py-4 pb-8 lg:py-8 text-center px-4">
            Here are some of the eye pleasing visuals that I have made that
            earned me clients satisfation
          </p>
          <Slider />
          <GraphicsMob />
        </div>

        <div className="section projects mb-20 box w-full flex items-center  flex-col exp">
          <p className="text-3xl pt-16 pb-4 md:text-4xl lg:text-[4rem] ">
            My <HighLight text="Web Projects" />{" "}
          </p>
          <p className="text-md max-w-[750px] text-gry py-4 pb-8 lg:py-8 text-center px-4">
            Experience the feel of the resposnsive websites demos
          </p>
        </div>
      </div>



      Hekek

      {/* <Road /> */}


    </>
  );
};

export default Home;
