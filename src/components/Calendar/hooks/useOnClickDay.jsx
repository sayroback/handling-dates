import React from "react";
import { useCalendarData } from "./useCalendarData";

export const useOnClickDay = () => {
  const { findIndexMonth } = useCalendarData();

  const OnClickDay = (year, month, dayClick) => {
    let monthIndex = findIndexMonth(month);
    let newDate = new Date(year, monthIndex, dayClick);
    return { monthIndex, dayClick, month, newDate };
  };
  return { OnClickDay };
};
