import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import LeftArrowIcon from "../assets/icons/left-arrow.png";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import BodyParts from "./BodyParts";
import ExerciseCard from "./ExerciseCard";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="left arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext); // use porps of VisibilityContext provided
  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right arrow" />
    </Typography>
  );
};

function HorizontalScrollBar({ data, bodyPart, setBodyPart, isBodyParts }) {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          {isBodyParts ? (
            <BodyParts
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </ScrollMenu>
  );
}

HorizontalScrollBar.propTypes = {
  data: PropTypes.array.isRequired,
};

export default HorizontalScrollBar;
