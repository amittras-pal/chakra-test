import { useColorMode } from "@chakra-ui/react";
import { useFormikContext } from "formik";
import ReactSelect, { components } from "react-select";
import React from "react";
import "./Select.scss";
import { MdClose, MdExpandMore } from "react-icons/md";

function Select(props) {
  const { colorMode } = useColorMode();

  const { name, label, options, ...rest } = props;
  const { setFieldValue, getFieldProps } = useFormikContext();
  const { value } = getFieldProps();
  const handleChange = (selection) => {
    setFieldValue([name], selection?.value || null);
  };

  const DropdownIndicator = (props) => (
    <components.DropdownIndicator {...props}>
      <MdExpandMore />
    </components.DropdownIndicator>
  );

  const ClearIndicator = (props) => (
    <components.ClearIndicator {...props}>
      <MdClose />
    </components.ClearIndicator>
  );

  return (
    <ReactSelect
      options={options}
      className={`${colorMode}-select`}
      classNamePrefix={`${colorMode}-select`}
      closeMenuOnScroll={true}
      components={{ DropdownIndicator, ClearIndicator }}
      value={options.find((opt) => opt.value === value[name])}
      onChange={handleChange}
      {...rest}
    />
  );
}

export default Select;
