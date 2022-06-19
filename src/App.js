import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import ScrollTopButton from "./components/ScrollTopButton";
import BMiCalculator from "./components/BMICalculator";
function App() {
  return (
    <Box
      position="relative"
      width="400px"
      sx={{ width: { xl: "1488px" } }}
      m="auto"
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/bmi" element={<BMiCalculator />} />
      </Routes>
      <ScrollTopButton />
      <Footer />
    </Box>
  );
}

export default App;
