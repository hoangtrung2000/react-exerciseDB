import React from "react";
import { Stack } from "@mui/material";
import { TailSpin } from "react-loader-spinner";
function Loader() {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <TailSpin ariaLabel="loading-indicator" color="#ff2625" />
    </Stack>
  );
}

export default Loader;
