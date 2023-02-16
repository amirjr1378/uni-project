import { useField } from "formik";
import React from "react";
import BaseTextArea, { TextAreaPropType } from "../base/base-text-area";

type Props = TextAreaPropType & {
  name: string;
  value?: any;
};

function FormikTextArea(props: Props) {
  const { value, name, ...rest } = props;
  const [field] = useField({ name, value });

  return <BaseTextArea {...rest} {...field} />;
}

export default FormikTextArea;
