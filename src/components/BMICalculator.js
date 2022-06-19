import React, { useState } from "react";
import { TextField, Typography, Button, Box, Stack } from "@mui/material";

import { fitnessCalculatorOptions, fetchData } from "../utils/fetchData";

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
    <Box mt="500px">
      <Stack direction="row" gap="20px">
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
      </Stack>
      <Button onClick={fetchBmiData} variant="contained">
        Calculator
      </Button>
      <Typography variant="h5">Ket qua: {result.bmi}</Typography>
    </Box>
  );
}

export default BMiCalculator;
