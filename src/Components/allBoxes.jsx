import React from 'react'
import gmailIcon from '../assets/Images/GmailLogoIcon.png'
import gitHubIcon from '../assets/Images/GitHubIcon.png'
import whatsAppIcon from '../assets/Images/WhatsAppIcon.png'
import linkedInIcon from '../assets/Images/LinkedInIcon.png'

// import { saveAs } from 'file-saver';

// import CV from '../assets/MY RESUME.pdf';

const allBoxes = (props) => {
    const hireMessage = `Subject: Letter of Acceptance - Congratulations on Your Job Application`
    // const downloadCV = () => {
    //     saveAs(CV, 'David Austin CV.pdf');
    // };

    let cursorCircle = React.useRef()
    let boxes = React.useRef()

    function moveCursor(event) {
        const cursorX = event.clientX;
        const cursorY = event.clientY;

        cursorCircle.current.style.left = cursorX - 125 + 'px';
        cursorCircle.current.style.top = cursorY - 125 + 'px';

        document.querySelectorAll('.boxTile').forEach((box) => {
            const rect = box.getBoundingClientRect();
            const boxX = rect.left + rect.width / 2;
            const boxY = rect.top + rect.height / 2;

            const distance = Math.sqrt(
                Math.pow(cursorX - boxX, 2) + Math.pow(cursorY - boxY, 2)
            );

            if (distance < 150) {
                box.style.opacity = '90%';
                box.style.border = '1px solid #ffffff28';
                box.style.scale = .99;
            } else {
                box.style.border = '1px solid transparent';
                box.style.opacity = '100%';
                box.style.scale = 1;

            }
        });
    };

    // boxes.current.addEventListener('mousemove', moveCursor)
    return (
        <div style={{ transform: `scaleY(${props.scale})`, opacity: props.scale }} className="z-[51] bg-[#0e0e0e] w-[100vw] h-[100vh] fixed top-0 left-0 duration-100">

            <div onMouseMove={moveCursor} className="w-[100vw] flex flex-col items-center text-center absolute text-white top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2">
                <div className="text-4xl font-extrabold">Get In touch</div>
                <div className="py-5 px-10 font-thin">I think it's time for you to an action and let's grow together.</div>


                <div className="Decisions flex gap-5 my-5">
                    {/* <button onClick={downloadCV} className="p-3 border border-white rounded-md hover:bg-[#ffffff10]">Download CV</button> */}
                    <a href="mailto:daveaustin9999@gmail.com?subject=Job%20Application%20Accepted&body=Dear%20David%20Austin,%0D%0A%0D%0AWe%20are%20delighted%20to%20inform%20you%20that%20your%20job%20application%20has%20been%20accepted.%20Congratulations%20on%20joining%20our%20team!%0D%0A%0D%0APlease%20find%20attached%20the%20official%20letter%20of%20acceptance%20outlining%20the%20details%20of%20your%20employment.%0D%0A%0D%0A[Business%20Name]:%20[Phone%20Number]%0D%0ASocials:%20[Social%20Media%20Handles]%0D%0A%0D%0AWe%20look%20forward%20to%20working%20with%20you%20and%20achieving%20great%20success%20together.%0D%0A%0D%0ABest%20regards,%0D%0A[Your%20Name]%0D%0A%0D%0A*Feel%20free%20to%20customize%20this%20letter*"><button className="p-3 border border-white bg-white text-black rounded-md">Hire Me</button> </a>
                </div>

                <div className="Icons flex gap-5 my-10 items-center">
                    <div className="text-lg font-semibold h-10 flex items-center pr-3 border-r border-r-white">Socials </div>
                    <a href="mailto:daveaustin9999@gmail.com" className="iconPad"><img width={40} title="Send a mail to daveaustin9999@gmail.com" src={gmailIcon} alt="gmail" className="icon hover:bg-[#ffffff20] p-1 hover:p-2 duration-150 rounded-md" /></a>
                    <a href="https://www.linkedin.com/in/david-austin-99052a261" className="iconPad"><img width={40} title="Visit david austin on linked in" src={linkedInIcon} alt="linkedin" className="icon hover:bg-[#ffffff20] p-1 hover:p-2 duration-150 rounded-md" /></a>
                    <a href="http://github.com/reaceee" className="iconPad"><img width={40} title="Visit github.com/reaceee" src={gitHubIcon} alt="github" className="icon hover:bg-[#ffffff20] p-1 hover:p-2 duration-150 rounded-md" /></a>
                </div>

                <div className="flex items-center text-sm bg-[#ffffff20] p-2 duration-150 rounded-full pr-5">
                    <a href="" className="iconPad"><img width={40} title="Visit " src={whatsAppIcon} alt="whatsapp" className="icon p-1.5 " /></a>
                    Send a text to +2349126803449
                </div>

            </div>

            <div className="grid-container">
                <div className="cursor z-0 rounded-full fixed bg-purp w-[250px] blur-3xl h-[250px]" ref={cursorCircle} ></div>
                <div className="corner"></div>
                <div className="corner"></div>

                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>
                <div className="boxTile"></div>



            </div>
        </div>
    )
}


export default allBoxes;