import classNames from "classnames";
import { DetailedHTMLProps, ReactNode, TextareaHTMLAttributes } from "react";
import BaseLabel, { BaseLabelProps } from "../BaseLabel";
import TextArea from "../elements/text-area";

export type TextAreaPropType = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  label?: ReactNode;
  labelProps?: BaseLabelProps;
  inputClassName?: string;
};

const BaseTextArea = (props: TextAreaPropType) => {
  const {
    label,
    labelProps,
    className,
    inputClassName,
    disabled,
    ...restProps
  } = props;
  return (
    <div className={classNames(className || "", "w-full")}>
      {label && <BaseLabel {...labelProps}>{label}</BaseLabel>}
      <TextArea
        placeholder="توضیحات"
        disabled={disabled}
        className={classNames(
          "border-1 rounded-lg border-gray-light !border-solid",
          "focus:ring-transparent focus:border-gray-medium hover:border-gray-medium",
          "w-full  block caret-gray-500  resize-none",
          inputClassName,
          disabled ? "cursor-not-allowed !bg-disable-gray" : null
        )}
        {...restProps}
      />
    </div>
  );
};

export default BaseTextArea;
