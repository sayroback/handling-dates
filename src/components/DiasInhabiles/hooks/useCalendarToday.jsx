import React from "react";

export const useCalendarToday = (locale = "es") => {
  const today = new Date();
  const yearToday = today.getUTCFullYear().toString();
  let monthToday = today.getUTCMonth(locale);
  const intl = new Intl.DateTimeFormat(locale, { month: "long" });
  let monthTodayName = intl.format(new Date(yearToday, monthToday));
  const monthTodayNameString =
    monthTodayName.charAt(0).toUpperCase() + monthTodayName.slice(1);

  let numDay = today.getDate();
  const initialScroll = monthToday;

  return { monthTodayNameString, numDay, monthToday, initialScroll, yearToday };
};
