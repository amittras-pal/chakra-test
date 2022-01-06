import {
  Box,
  FormLabel,
  RangeSlider as ChakraRange,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
} from "@chakra-ui/react";
import React from "react";

function RangeSlider(props) {
  const { name_1, name_2, label, form, ...sliderProps } = props;

  const handleChange = ([val1, val2]) => {
    form.setFieldValue([name_1], val1);
    form.setFieldValue([name_2], val2);
  };

  return (
    <Box width={"92%"} mb={6}>
      {label && <FormLabel mb={1}>{label}</FormLabel>}
      <ChakraRange
        {...sliderProps}
        colorScheme={"red"}
        onChange={handleChange}
        value={[form.values[name_1], form.values[name_2]]}
        name={[name_1, name_2]}>
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} boxSize={6}>
          <Text fontSize={"sm"} fontWeight={"bold"} textColor={"red.500"}>
            {form.values[name_1]}
          </Text>
        </RangeSliderThumb>
        <RangeSliderThumb index={1} boxSize={6}>
          <Text fontSize={"sm"} fontWeight={"bold"} textColor={"red.500"}>
            {form.values[name_2]}
          </Text>
        </RangeSliderThumb>
      </ChakraRange>
    </Box>
  );
}

export default RangeSlider;
