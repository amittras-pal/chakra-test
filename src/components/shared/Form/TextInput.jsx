import React from "react";
import { Field } from "formik";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";

function TextInput(props) {
  const { name, label, ...rest } = props;
  return (
    <Field name={name}>
      {({ form, field }) => (
        <FormControl isInvalid={form.errors[name] && form.touched[name]}>
          {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
          <Input id={name} {...rest} {...field} />
          <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
}

export default TextInput;
