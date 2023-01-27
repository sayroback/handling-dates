import React from 'react'

export const useCalendarData = (locale = "es", year) => {
  const today = new Date();
  year ??= today.getUTCFullYear();

  const weekdays = [...Array(7).keys()];
  const intlWeekDay = new Intl.DateTimeFormat(locale, { weekday: "short" });

  const weekDaysNames = weekdays.map((_, weekDayIndex) => {
    const date = new Date(2021, 10, weekDayIndex + 1);
    const weekDayName = intlWeekDay.format(date);
    return weekDayName;
  });

  const months = [...Array(12).keys()];
  const intl = new Intl.DateTimeFormat(locale, { month: "long" });

  const calendar = months.map((monthKey) => {
    const month = intl.format(new Date(year, monthKey));
    let monthName = month.charAt(0).toUpperCase() + month.slice(1);
    const nextMonthIndex = monthKey + 1;
    const daysOfMonth = new Date(year, nextMonthIndex, 0).getDate();

    const startsOn = new Date(year, monthKey, 1).getDay();

    return {
      monthName,
      daysOfMonth,
      startsOn,
    };
  });
  
  return {calendar, weekDaysNames, today, year}
}
