import {
  CircularProgress,
  CircularProgressLabel,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

function RatingCircle({ rating, ...progressProps }) {
  const convertedValue = typeof rating === "number" ? rating.toFixed(1) : 0;
  const label = typeof rating === "number" ? rating.toFixed(1) : rating;

  const { colorMode } = useColorMode();

  const getProgressColorScheme = () => {
    if (convertedValue < 4) return colorMode === "dark" ? "red.400" : "red.500";
    else if (convertedValue >= 4 && convertedValue < 7) return "orange";
    else return colorMode === "dark" ? "green.300" : "green.500";
  };

  return (
    <CircularProgress
      color={getProgressColorScheme()}
      value={convertedValue * 10}
      trackColor={colorMode === "dark" ? "gray.800" : "white"}
      boxShadow={"md"}
      borderRadius={"full"}
      capIsRound
      {...progressProps}>
      <CircularProgressLabel
        fontWeight={"bold"}
        fontSize={"0.9rem"}
        color={colorMode === "dark" ? "white" : "black"}>
        {label}
      </CircularProgressLabel>
    </CircularProgress>
  );
}

export default RatingCircle;
