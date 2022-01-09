import { Box, FormLabel, useColorMode } from "@chakra-ui/react";
import { useFormikContext } from "formik";
import { DateTime } from "luxon";
import React from "react";
import DatePicker from "react-date-picker";
import "./DatePicker.scss";
import { datepickerIconProps, staticDatepickerProps } from "./datePickerUtils";

function SSDatePicker(props) {
  const { colorMode } = useColorMode();

  const { label, name, minDate, maxDate, ...rest } = props;
  const { setFieldValue, getFieldProps } = useFormikContext();
  const { value } = getFieldProps();

  const handleChange = (e) => {
    setFieldValue([name], e ? DateTime.fromJSDate(e).toISODate() : null);
  };

  return (
    <Box w={"100%"}>
      {label && (
        <FormLabel fontSize={"sm"} htmlFor={name}>
          {label}
        </FormLabel>
      )}
      <DatePicker
        name={name}
        value={value[name] ? new Date(value[name]) : null}
        minDate={minDate ? new Date(minDate) : null}
        maxDate={maxDate ? new Date(maxDate) : null}
        onChange={handleChange}
        className={`datepicker-input ${colorMode}`}
        calendarClassName={`datepicker-calendar ${colorMode}`}
        {...rest}
        {...staticDatepickerProps}
        {...datepickerIconProps}
      />
    </Box>
  );
}

export default SSDatePicker;
