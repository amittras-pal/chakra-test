import { Heading, useColorMode } from "@chakra-ui/react";
import React from "react";

function SectionHeading({ children, ...headingProps }) {
  const { colorMode } = useColorMode();
  return (
    <Heading
      textColor={colorMode === "dark" ? "red.200" : "red.500"}
      {...headingProps}>
      {children}
    </Heading>
  );
}

export default SectionHeading;
