import React from "react";

export const useCalendarEvent = (locale = "es") => {
  const today = new Date();
  const yearToday = today.getUTCFullYear();
  let monthToday = today.getUTCMonth(locale);
  const intl = new Intl.DateTimeFormat(locale, { month: "long" });
  let monthTodayName = intl.format(new Date(yearToday, monthToday));
  const monthTodayNameString =
    monthTodayName.charAt(0).toUpperCase() + monthTodayName.slice(1);

  let numDay = today.getDate();

  return { monthTodayNameString, numDay };
};
