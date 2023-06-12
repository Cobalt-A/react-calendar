import { IDay } from "../../types/IDay";

const getDate = (date: Date): Date => {
  date.setMilliseconds(0);
  date.setSeconds(0);
  date.setMinutes(0);
  return date;
};

export const getWeekByDate = (date: Date): IDay[] => {
  const currentDay = getDate(new Date()).setHours(0);
  return Array(7)
  .fill(getDate(new Date(date)))
  .map((el: Date, idx) => {
    el.setHours(-24);
    const day = new Date(el.setDate(el.getDate() - el.getDay() + idx + 1));

    if (day.getTime() === currentDay) {
      return { isCurrentDay: true, day: day.getTime() };
    }
    return { isCurrentDay: false, day: day.getTime() };
  });
};

export const getHours = (): number[] => {
  return Array(24)
  .fill(0)
  .map((el, idx) => {
    return idx;
  });
};

export const getHourId = (date: Date, hour: number): number => {
  const currentDate = getDate(date);
  return currentDate.setHours(hour);
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
