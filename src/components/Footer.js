import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/images/Logo-1.png";

function Footer() {
  return (
    <Box mt="80px" bgColor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="200x" height="40px" />
        <Typography variant="h5" pb="40px" mt="20px">
          No <span style={{ color: "#ff2625", fontStyle: "italic" }}>Pain</span>{" "}
          No <span style={{ color: "#ff2625", fontStyle: "italic" }}>Gain</span>
        </Typography>
      </Stack>
    </Box>
  );
}

export default Footer;
