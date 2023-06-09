import { useField } from "formik";
import React from "react";
import DatePicker, { DatePickerPropType } from "../base/DatePicker";
import {
  ConvertDateToDayRange,
  ParseJalaliToIsoString,
} from "../functions/jalali";

type Props = DatePickerPropType & {
  name: string;
  value?: any;
};

function FormikDatePicker(props: Props) {
  const { value, name, onChange, ...rest } = props;
  const [field, , helpers] = useField({ name, value });

  return (
    <div>
      <DatePicker
        {...field}
        // value={
        //   field?.value?.length
        //     ? {
        //         year: +field?.value.split("/")[0],
        //         month: +field?.value.split("/")[1],
        //         day: +field?.value.split("/")[2],
        //       }
        //     : null
        // }
        value={ConvertDateToDayRange(field?.value)}
        {...rest}
        onChange={(newDate) => {
          if (onChange) onChange(newDate);
          helpers.setValue(
            // `${newDate?.year}/${newDate?.month}/${newDate?.day}`
            ParseJalaliToIsoString(newDate)
          );
        }}
        onBlur={() => {
          helpers.setTouched(true);
        }}
      />
    </div>
  );
}

export default FormikDatePicker;
