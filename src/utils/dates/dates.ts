import { IDay } from "../../types/IDay";

export const getWeekByDate = (date: Date): IDay[] => {
  return Array(7)
  .fill(new Date(date))
  .map((el, idx) => {
    el.setHours(-24);
    const day = new Date(el.setDate(el.getDate() - el.getDay() + idx + 1));
    if (day.getDate() === new Date().getDate()) {
      return { isCurrentDay: true, day: day.getTime() };
    }
    return { isCurrentDay: false, day: day.getTime() };
  });
};

export const getHours = (): number[] => {
  return Array(24)
  .fill(0)
  .map((el: number, idx) => {
    return idx;
  });
};

export const getHourId = (date: Date, hour: number): number => {
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  date.setHours(hour);
  return date.getTime();
};

export const padTo2Digits = (num: number) => {
  return num.toString().padStart(2, "0");
};

export const weekNames = ["M", "T", "W", "T", "F", "S", "S"];

export const monthsNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
