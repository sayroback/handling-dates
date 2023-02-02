import React from "react";

export const useCalendarEvents = (listEvents, locale = "es") => {
  let dateEvents;
  let groupedEvents;
  if (listEvents) {
    dateEvents = listEvents.map((el) => {
      let date = new Date(el.dia_inhabil);
      let year = date.getUTCFullYear().toString();
      let day = date.getDate();
      let monthNumber = date.getUTCMonth(locale);
      let intl = new Intl.DateTimeFormat(locale, { month: "long" });
      let monthName = intl.format(new Date(year, monthNumber));
      let month = monthName.charAt(0).toUpperCase() + monthName.slice(1);
      let eventDescription = el.descripcion;
      return { day, year, month, eventDescription };
    });

    const allMonths = new Set(dateEvents.map((el) => el.month));
    const months = [...allMonths];
    console.log(months);
  }
  return { dateEvents };
};
