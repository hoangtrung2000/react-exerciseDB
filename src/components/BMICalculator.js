import React, { useState } from "react";
import {
  TextField,
  Typography,
  Button,
  Box,
  Stack,
  autocompleteClasses,
} from "@mui/material";

import { fitnessCalculatorOptions, fetchData } from "../utils/fetchData";
import { maxWidth, width } from "@mui/system";

function BMiCalculator() {
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState(0);

  const fetchBmiData = async () => {
    if (age && height && weight) {
      const bmiUrl = "https://fitness-calculator.p.rapidapi.com";
      const getBmiResult = await fetchData(
        `${bmiUrl}/bmi?age=${age}&weight=${weight}&height=${height}`,
        fitnessCalculatorOptions
      );
      setAge("");
      setWeight("");
      setHeight("");
      setResult(getBmiResult.data);
    }
  };
  return (
    <Stack
      mx="auto"
      sx={{ maxWidth: "800px", padding: { xs: "0 10px", md: "0" } }}
      direction="column"
      gap="20px"
    >
      <Typography variant="h3" textAlign="center" pt="20px">
        Body Mass Index Calculator
      </Typography>
      <Box
        sx={{
          border: "2px solid #ff262557",
          borderRadius: "10px",
          width: "100%",
        }}
      >
        <Stack
          justifyContent="center"
          alignItems="center"
          direction="column"
          gap="20px"
          py="20px"
        >
          <TextField
            sx={{ width: "200px" }}
            value={age}
            onChange={(e) => setAge(e.target.value)}
            id="outlined-basic"
            label="Age"
            variant="outlined"
            type="number"
            InputProps={{ inputProps: { min: 0, max: 80 } }}
          />
          <TextField
            sx={{ width: "200px" }}
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            id="outlined-basic"
            label="Weight"
            variant="outlined"
            type="number"
            InputProps={{ inputProps: { min: 40, max: 160 } }}
          />
          <TextField
            sx={{ width: "200px" }}
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            id="outlined-basic"
            label="Height"
            variant="outlined"
            type="number"
            InputProps={{ inputProps: { min: 130, max: 230 } }}
          />
          <Button
            className="search-btn"
            onClick={fetchBmiData}
            sx={{
              backgroundColor: "#ff2625",
              color: "#fff",
              border: "1px solid transparent",
            }}
          >
            Calculator
          </Button>
        </Stack>
      </Box>
      <Typography variant="h4" textAlign="center" color="#ff2625">
        {result.health}
      </Typography>
      <Typography variant="h5" textAlign="center">
        BMI: {result.bmi}
      </Typography>
    </Stack>
  );
}

export default BMiCalculator;
