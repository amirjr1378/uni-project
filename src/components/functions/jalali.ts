import { DayValue } from "react-modern-calendar-datepicker";
import moment from "jalali-moment";

export const ParseJalaliToIsoString = (date: DayValue) => {
  const parseButDayBefore = new Date(
    moment
      .from(`${date?.year}-${date?.month}-${date?.day}`, "fa", "YYYY/MM/DD")
      .locale("en")
      .format("YYYY/MM/DD")
  );

  return moment(parseButDayBefore)
    .add(1, "day")
    .startOf("day")
    .toISOString()
    .replace(/T.*/gi, "T00:00:00.000Z");
};

export const convertDateToShamsi = (
  reqDate: Date | string | undefined,
  format?: string
) => {
  if (!reqDate) return "نامشخص";
  let convertData: string | Date = "";
  if (typeof reqDate === "string") convertData = new Date(reqDate);
  else convertData = reqDate;
  return moment(convertData).format(format || "jYYYY/jMM/jDD HH:mm");
};

export const ConvertDateToDayRange = (reqDate?: any) => {
  if (reqDate) {
    let convertData: string[] = [];
    convertData = convertDateToShamsi(reqDate, "jYYYY/jMM/jDD").split("/");
    return {
      year: Number(convertData[0]),
      month: Number(convertData[1]),
      day: Number(convertData[2]),
    };
  }
};
