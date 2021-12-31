import {
  Button,
  ButtonGroup,
  Input,
  useColorMode,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";
import React from "react";

const RadioCard = (props) => {
  const { colorMode } = useColorMode();
  const { getInputProps, getCheckboxProps } = useRadio(props);
  return (
    <Button
      size={"sm"}
      as="label"
      variant={"outline"}
      flexGrow={1}
      cursor={"pointer"}
      {...getCheckboxProps()}
      _checked={{
        bg: colorMode === "light" ? "red.500" : "red.200",
        color: colorMode === "light" ? "white" : "black",
      }}>
      {props.label}
      <Input {...getInputProps()} />
    </Button>
  );
};

function ButtonGroupRadio({ name, options, form }) {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name,
    value: form.values[name],
    onChange: (val) => form.setFieldValue([name], val),
  });
  return (
    <ButtonGroup isAttached {...getRootProps()} w={"full"}>
      {options.map((option) => (
        <RadioCard
          {...getRadioProps({ value: option.value })}
          label={option.label}
          key={option.value}
          name={name}
        />
      ))}
    </ButtonGroup>
  );
}

export default ButtonGroupRadio;
