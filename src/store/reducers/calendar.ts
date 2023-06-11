import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getWeekByDate } from "../../utils/dates/dates";
import { IDay } from "../../types/IDay";

interface CalendarState {
  week: IDay[];
  date: number;
  focusEvent: number | null;
  events: number[];
  isShowDelete: boolean;
}

const initialState: CalendarState = {
  week: getWeekByDate(new Date()),
  date: new Date().getTime(),
  focusEvent: null,
  events: JSON.parse(String(localStorage.getItem("events"))) || [],
  isShowDelete: false,
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setDate: (state, action: PayloadAction<number>) => {
      state.date = action.payload;
      state.week = getWeekByDate(new Date(action.payload));
    },
    setEvents: (state, action: PayloadAction<number[]>) => {
      state.events = action.payload;
      localStorage.setItem("events", JSON.stringify(action.payload));
    },
    setFocusEvent: (state, action: PayloadAction<number | null>) => {
      state.focusEvent = action.payload;
    },
    setShowDelete: (state, action: PayloadAction<boolean>) => {
      state.isShowDelete = action.payload;
    },
  },
});

export default calendarSlice.reducer;
