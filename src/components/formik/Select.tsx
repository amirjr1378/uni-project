import { useField } from "formik";
import React from "react";
import BaseSelect, { SelectPropTypes } from "../base/base-select";

export type FormikSelectPrp = Omit<SelectPropTypes, "value"> & {
  name: string;
  value?: any;
  tabIndex?: number;
};

function FormikSelect(props: FormikSelectPrp) {
  const { value, tabIndex, name, ...rest } = props;
  const [field, , helpers] = useField({ name, value });

  return (
    <BaseSelect
      {...field}
      tabIndex={tabIndex}
      onSelect={(newValue) => helpers.setValue(newValue)}
      {...rest}
      onBlur={() => helpers.setTouched(true)}
    />
  );
}

export default FormikSelect;
