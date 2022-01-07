import {
  Box,
  FormLabel,
  RangeSlider as ChakraRange,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useFormikContext } from "formik";
import React from "react";

function RangeSlider({ name_1, name_2, label, ...sliderProps }) {
  const { colorMode } = useColorMode();

  const { setFieldValue, getFieldProps } = useFormikContext();
  const { value } = getFieldProps();

  const handleChange = ([val1, val2]) => {
    setFieldValue([name_1], val1);
    setFieldValue([name_2], val2);
  };

  return (
    <Box width={"92%"} mb={3}>
      {label && <FormLabel mb={1}>{label}</FormLabel>}
      <ChakraRange
        {...sliderProps}
        colorScheme={"red"}
        onChange={handleChange}
        value={[value[name_1], value[name_2]]}
        name={[name_1, name_2]}>
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} boxSize={6}>
          <Text
            fontSize={"xs"}
            fontWeight={"bold"}
            textColor={colorMode === "dark" ? "gray.800" : "red.500"}>
            {value[name_1]}
          </Text>
        </RangeSliderThumb>
        <RangeSliderThumb index={1} boxSize={6}>
          <Text
            fontSize={"xs"}
            fontWeight={"bold"}
            textColor={colorMode === "dark" ? "gray.800" : "red.500"}>
            {value[name_2]}
          </Text>
        </RangeSliderThumb>
      </ChakraRange>
    </Box>
  );
}

export default RangeSlider;
