import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/Logo.png";

function Navbar() {
  const [isMobile, setIsMobile] = useState(true);
  const handleClick = () => setIsMobile(!isMobile);
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-around"
        sx={{
          gap: { sm: "122px", xs: "40px" },
          mt: { sm: "32px", xs: "20px" },
          justifyContent: "none",
          px: "20px",
        }}
      >
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            style={{ width: "48px", margin: "0 20px" }}
          />
        </Link>
        <Stack
          direction="row"
          sx={{ gap: { xs: "20px", md: "40px" } }}
          fontSize="24px"
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#3a1212",
              borderBottom: "3px solid #ff2625",
            }}
          >
            Home
          </Link>
          <a
            href="#exercises"
            style={{ textDecoration: "none", color: "#3A1212" }}
          >
            Exercises
          </a>
          <Link
            to="/bmi"
            style={{
              textDecoration: "none",
              color: "#3a1212",
            }}
          >
            BMI
          </Link>
        </Stack>
      </Stack>
    </>
  );
}

export default Navbar;
