import "react-modern-calendar-datepicker/lib/DatePicker.css";

import { Transition } from "@headlessui/react";
import { CalendarIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { Calendar, DayValue } from "react-modern-calendar-datepicker";
import BaseLabel, { BaseLabelProps } from "../BaseLabel";
import MaskInput from "./mask-input/MaskInput";
import { padZeroToFirst } from "../functions/padZeroToFirst";

export type DatePickerPropType = {
  onChange?: (rangeValue: DayValue) => void;
  value?: DayValue;
  label?: string;
  placeholder?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined;
  labelProps?: BaseLabelProps;
  className?: string;
  submitOnChange?: boolean;
  hasInput?: boolean;
  textClassName?: string;
  inputClassName?: string;
  tabIndex?: number;
};

const DatePicker = (props: DatePickerPropType) => {
  const {
    value,
    onChange,
    label,
    labelProps,
    placeholder = "انتخاب تاریخ",
    className,
    submitOnChange = false,
    hasInput = false,
    inputClassName,
    textClassName,

    ...rest
  } = props;
  const [day, setDay] = React.useState<DayValue>(value);
  const [isShow, setIsShow] = useState<boolean>(false);

  useEffect(() => {
    setDay(value);
  }, [value]);

  const cancel = () => {
    setIsShow(false);
    setDay(value);
  };

  const submit = (day: DayValue) => {
    setIsShow(false);

    if (onChange && typeof onChange === "function") {
      onChange(day);
    }
  };

  return (
    <>
      <div
        className={
          " block align-baseline self-baseline justify-center relative z-50"
        }
      >
        {label && <BaseLabel {...labelProps}>{label}</BaseLabel>}
        <div
          className={classNames(
            "flex w-full h-[40px] rounded-lg border-[#E2E8F0] border-1 bg-white justify-around content-center items-center pr-2 text-[#64748B]  font-medium !outline-0",
            className
          )}
          onClick={() => !hasInput && setIsShow(true)}
        >
          <MaskInput
            readOnly={!hasInput}
            labelProps={labelProps}
            className={classNames(
              "w-full !border-0 !flex !items-center !p-0 !ltr"
            )}
            inputClassName={classNames(
              " !p-0 !border-0 !bg-green-300 !shadow-none ",
              inputClassName
            )}
            mask={"0000/00/00"}
            textClassName={classNames(
              "!shadow-none !border-0 outline-0",
              textClassName
            )}
            placeholder={placeholder}
            onAccept={(value: any) => {
              if (value.length === 10) {
                setDay({
                  year: +value.split("/")[0],
                  month: +value.split("/")[1],
                  day: +value.split("/")[2],
                });
                submit({
                  year: +value.split("/")[0],
                  month: +value.split("/")[1],
                  day: +value.split("/")[2],
                });
              }
            }}
            value={
              day?.year && day?.month && day?.day
                ? `${day?.year}/${padZeroToFirst(day?.month)}/${padZeroToFirst(
                    day?.day
                  )}`
                : undefined
            }
            {...rest}
          />

          <CalendarIcon
            className={"w-[22px] text-gray-light ml-2 cursor-pointer"}
            onClick={() => {
              setIsShow(true);
            }}
          />
        </div>
      </div>
      <Transition
        show={isShow}
        enter="transition duration-200 ease-in mt-2 absolute z-40 flex"
        enterFrom="transform scale-95 opacity-0 ease-in mt-2 z-40 absolute"
        enterTo="transform scale-100 opacity-100 mt-2 absolute z-40"
        entered={"transform scale-100 opacity-100 mt-2 absolute flex z-40"}
        leave="transition duration-200 ease-out mt-2 absolute z-40"
        leaveFrom="transform scale-100 opacity-100 ease-out mt-2 absolute "
        leaveTo="transform scale-95 opacity-0 mt-2 absolute "
      >
        <ClickAwayListener onClickAway={cancel}>
          <div>
            <Calendar
              shouldHighlightWeekends
              calendarRangeStartClassName={"!bg-[#F8F7FA] !text-[#5F41B2]"}
              locale="fa"
              calendarRangeBetweenClassName={"!bg-[#E2E2E2] !text-black"}
              calendarRangeEndClassName={"!bg-[#6366F1] !text-white"}
              value={day}
              onChange={(value) => {
                if (submitOnChange) {
                  submit(value);
                } else {
                  setDay(value);
                }
              }}
              renderFooter={() =>
                !submitOnChange ? (
                  <div
                    className={
                      " text-sm font-semiboldw-full flex justify-between !px-3 !mb-4"
                    }
                  >
                    <button
                      className={
                        " !bg-[#5F41B2] z-20 text-white rounded-lg !w-full !mx-3 !py-3 "
                      }
                      onClick={() => {
                        submit(day);
                      }}
                      type="button"
                      disabled={!day}
                    >
                      ذخیره
                    </button>
                    <button
                      className={"!rounded-lg w-full !mx-3 !py-3"}
                      onClick={cancel}
                      type="button"
                    >
                      انصراف
                    </button>
                  </div>
                ) : null
              }
            />
          </div>
        </ClickAwayListener>
      </Transition>
    </>
  );
};
export default DatePicker;
