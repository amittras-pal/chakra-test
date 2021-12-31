import {
  FormControl,
  FormLabel,
  Radio,
  RadioGroup as ChakraRadio,
} from "@chakra-ui/react";
import { Field } from "formik";
import React from "react";

function RadioGroup(props) {
  const { name, label, values, ...rest } = props;
  return (
    <Field name={name}>
      {({ form, field }) => (
        <FormControl isInvalid={form.errors[name] && form.touched[name]}>
          {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
          <ChakraRadio {...field} {...rest}>
            {values.map((val) => (
              <Radio {...field} {...rest} value={val} key={val}>
                {val.substr(0, 1).toUpperCase() + val.substr(1)}
              </Radio>
            ))}
          </ChakraRadio>
        </FormControl>
      )}
    </Field>
  );
}

export default RadioGroup;
