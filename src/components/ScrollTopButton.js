import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { ArrowDropUp } from "@mui/icons-material";

function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 1000) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisible);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      sx={{
        display: visible ? "inline" : "none",
        position: "fixed",
        right: "20px",
        bottom: "50px",
        background: "#ffa9a9",
        borderRadius: "50%",
        width: "70px",
        height: "70px",
      }}
      onClick={scrollTop}
    >
      <ArrowDropUp sx={{ fontSize: "50px", color: "#fff" }} />
    </Button>
  );
}

export default ScrollTopButton;
