import {
  Box,
  FormLabel,
  Slider as ChakraSlider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useFormikContext } from "formik";
import React from "react";

function Slider({ name, label, ...sliderProps }) {
  const { colorMode } = useColorMode();

  const { setFieldValue, getFieldProps } = useFormikContext();
  const { value } = getFieldProps();

  return (
    <Box width={"92%"} mb={3}>
      {label && (
        <FormLabel fontWeight={"bold"} mb={1}>
          {label}
        </FormLabel>
      )}
      <ChakraSlider
        {...sliderProps}
        colorScheme={"red"}
        value={value[name]}
        name={name}
        onChange={(value) => setFieldValue([name], value)}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb boxSize={6}>
          <Text
            fontSize={"xs"}
            fontWeight={"bold"}
            textColor={colorMode === "dark" ? "gray.800" : "red.500"}>
            {value[name]}
          </Text>
        </SliderThumb>
      </ChakraSlider>
    </Box>
  );
}

export default Slider;
