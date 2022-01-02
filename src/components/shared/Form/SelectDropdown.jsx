import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { Field } from "formik";
import React from "react";

function SelectDropdown(props) {
  const { name, label, options, ...rest } = props;

  return (
    <Field name={name}>
      {({ form, field }) => (
        <FormControl isInvalid={form.errors[name] && form.touched[name]}>
          {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
          <Select {...field} {...rest} cursor={"pointer"}>
            {options.map((option) => (
              <option value={option.value} key={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </FormControl>
      )}
    </Field>
  );
}

export default SelectDropdown;
