import React, { FC, MouseEvent } from "react";
import CalendarHeader from "../components/Calendar/CalendarHeader/CalendarHeader";
import CalendarWeeks from "../components/Calendar/CalendarWeeks/CalendarWeeks";
import CalendarTimeTable from "../components/Calendar/CalendarTimeTable/CalendarTimeTable";
import CalendarBottomMenu from "../components/Calendar/CalendarBottomMenu/CalendarBottomMenu";
import { useAppDispatch } from "../hooks/redux";
import { calendarSlice } from "../store/reducers/calendar";

const Calendar: FC = () => {
  const { setFocusEvent, setShowDelete } = calendarSlice.actions;
  const dispatch = useAppDispatch();

  const clickHandler = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    if (target.hasAttribute("active")) {
      const isActive = target.getAttribute("active");
      isActive === "true"
        ? dispatch(setShowDelete(true))
        : dispatch(setShowDelete(false));
      dispatch(setFocusEvent(Number(target.dataset.id)));
      return;
    }
    dispatch(setShowDelete(false));
    dispatch(setFocusEvent(null));
  };

  return (
    <div id="calendar" onClick={clickHandler}>
      <CalendarHeader />
      <CalendarWeeks />
      <CalendarTimeTable />
      <CalendarBottomMenu />
    </div>
  );
};

export default Calendar;
