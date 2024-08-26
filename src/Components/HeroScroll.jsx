import React from "react"
const ScrollAnimation = () => {
    useEffect(() => {
      const handleScroll = () => {
        const boxes = document.querySelectorAll(".box");
        const windowHeight = window.innerHeight;

        boxes.forEach((box) => {
          const boxTop = box.getBoundingClientRect().top;

          if (boxTop < windowHeight * 0.8) {
            box.style.opacity = "1";
            box.style.transform = "translateY(0)";
            box.style.transition = "opacity 0.6s ease, transform 0.6s ease";
          } else {
            box.style.opacity = "0";
            box.style.transform = "translateY(50px)";
            box.style.transition = "opacity 0.6s ease, transform 0.6s ease";
          }
        });
      };

      window.addEventListener("scroll", handleScroll);

      // Trigger the scroll event once to apply the effect on page load
      handleScroll();

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  };
