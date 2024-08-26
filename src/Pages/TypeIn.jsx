import React, { useState, useEffect } from "react";

const TypeIn = () => {
  const allJobs = [
    "FRONT-END WEB DEVELOPER",
    "GRAPHIC DESIGNER",
    "DIGITAL ARTIST",
    "SOFTWARE DEVELOPER",
  ];

  const [job, setJob] = useState("");
  const [curJobIndex, setCurJobIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentJob = allJobs[curJobIndex];

      if (!isDeleting) {
        setJob((prev) => currentJob.substring(0, prev.length + 1));
        if (job === currentJob) {
          setTimeout(() => setIsDeleting(true), 1000); // Wait before deleting
        }
      } else {
        setJob((prev) => prev.substring(0, prev.length - 1));
        if (job === "") {
          setIsDeleting(false);
          setCurJobIndex((prev) => (prev + 1) % allJobs.length);
        }
      }
    };

    const typingInterval = setInterval(handleTyping, 100);

    return () => clearInterval(typingInterval);
  }, [job, isDeleting, curJobIndex, allJobs]);

  return (
    <>
      <p className="mb-4 mt-20 text-sm flex items-center whitespace-nowrap gap-0.5">
        <p>
          {" "}
          I AM A <span className="font-black"> {job}</span>
        </p>

        <p
          className={`blip cursor w-1.5 animate-pulse h-4 ${
            dark ? "bg-wht text-blk" : "bg-blk text-wht"
          }`}
        ></p>
      </p>
    </>
  );
};

export default TypeIn;
