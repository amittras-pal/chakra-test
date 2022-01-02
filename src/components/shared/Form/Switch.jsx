import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Switch as ChakraSwitch,
} from "@chakra-ui/react";
import { Field } from "formik";
import React from "react";

function Switch(props) {
  const { label, name, ...rest } = props;
  return (
    <Field name={name}>
      {({ form, field }) => (
        <FormControl
          isInvalid={form.errors[name] && form.touched[name]}
          display={"flex"}
          alignItems={"center"}
          gap={"sm"}>
          <ChakraSwitch {...rest} {...field} isChecked={field.value} />
          {label && (
            <FormLabel htmlFor={name} mb={"0"} size={"sm"}>
              {label}
            </FormLabel>
          )}
          <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
}

export default Switch;
