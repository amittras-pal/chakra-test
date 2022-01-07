import { useColorMode } from "@chakra-ui/react";
import { useFormikContext } from "formik";
import ReactSelect, { components } from "react-select";
import React from "react";
import "./Select.scss";
import { MdExpandMore } from "react-icons/md";

function Select(props) {
  const { colorMode } = useColorMode();

  const { name, label, options, ...rest } = props;
  const { setFieldValue, getFieldProps } = useFormikContext();
  const { value } = getFieldProps();
  const handleChange = (selection) => {
    setFieldValue([name], selection.value);
  };

  const DropdownIndicator = (props) => (
    <components.DropdownIndicator {...props}>
      <MdExpandMore />
    </components.DropdownIndicator>
  );

  return (
    <ReactSelect
      options={options}
      className={`${colorMode}-select`}
      classNamePrefix={`${colorMode}-select`}
      closeMenuOnScroll={true}
      components={{ DropdownIndicator }}
      value={options.find((opt) => opt.value === value[name])}
      onChange={handleChange}
      {...rest}
    />
  );
}

export default Select;

// setTimeout(() => {
//   debugger;
// }, 1500);
