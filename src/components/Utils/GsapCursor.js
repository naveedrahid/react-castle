import React, { useEffect } from "react";
import gsap from "gsap";
import { useCursorContext } from "./CursorContext";

const GsapCursor = () => {
  const { mouseX, setMouseX, mouseY, setMouseY } = useCursorContext();

  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const cursor2 = document.querySelector(".cursor2");
    const cursorScale = document.querySelectorAll(".cursor-scale");

    const handleMouseMove = (e) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);

      gsap.to(cursor, {
        css: {
          left: mouseX,
          top: mouseY,
        },
      });

      gsap.to(cursor2, {
        css: {
          left: mouseX,
          top: mouseY,
        },
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    cursorScale.forEach((link) => {
      link.addEventListener("mousemove", () => {
        cursor.classList.add("grow");
        if (link.classList.contains("small")) {
          cursor.classList.remove("grow");
          cursor.classList.add("grow-small");
        }
      });

      link.addEventListener("mouseleave", () => {
        cursor.classList.remove("grow");
        cursor.classList.remove("grow-small");
      });
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cursorScale.forEach((link) => {
        link.removeEventListener("mousemove", () => {
          cursor.classList.add("grow");
          if (link.classList.contains("small")) {
            cursor.classList.remove("grow");
            cursor.classList.add("grow-small");
          }
        });

        link.removeEventListener("mouseleave", () => {
          cursor.classList.remove("grow");
          cursor.classList.remove("grow-small");
        });
      });
    };
  }, [mouseX, mouseY, setMouseX, setMouseY]);

  return null;
};

export default GsapCursor;
