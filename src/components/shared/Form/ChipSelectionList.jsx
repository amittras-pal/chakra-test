import {
  Flex,
  FormLabel,
  Input,
  Tag,
  TagLabel,
  useCheckbox,
  useCheckboxGroup,
} from "@chakra-ui/react";
import React from "react";

function SelectionChip(props) {
  const { getCheckboxProps, getInputProps } = useCheckbox(props);
  return (
    <Tag
      as={"label"}
      size={"md"}
      colorScheme={"red"}
      variant={props.isChecked ? "solid" : "outline"}
      cursor={"pointer"}
      _focusWithin={{ borderWidth: "2px", borderColor: "blue.300" }}>
      <TagLabel>{props.label}</TagLabel>
      <Input {...getInputProps()} {...getCheckboxProps()} />
    </Tag>
  );
}

function ChipSelectionList({ name, options, form, label }) {
  const { getCheckboxProps } = useCheckboxGroup({
    name,
    value: form.values[name],
    onChange: (val) => form.setFieldValue([name], val),
  });
  return (
    <>
      {label && <FormLabel>{label}</FormLabel>}
      <Flex gap={"0.5rem"} flexWrap={"wrap"} mb={4}>
        {options.map((option) => (
          <SelectionChip
            key={option.id}
            {...getCheckboxProps()}
            isChecked={form.values[name].includes(option.id)}
            value={option.id}
            label={option.name}
          />
        ))}
      </Flex>
    </>
  );
}

export default ChipSelectionList;
