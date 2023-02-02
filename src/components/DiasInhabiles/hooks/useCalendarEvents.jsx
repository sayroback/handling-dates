import React from "react";

export const useCalendarEvents = (
  listEvents,
  locale = "es",
  yearCalendarDesktop
) => {
  let dateEvents;
  let groupedEvents;

  if (listEvents.length > 0) {
    dateEvents = listEvents.map((el) => {
      let date = new Date(el.diaInhabil);
      let year = date.getUTCFullYear().toString();
      if (year === yearCalendarDesktop) {
        let day = date.getDate();
        let monthNumber = date.getUTCMonth(locale);
        let intl = new Intl.DateTimeFormat(locale, { month: "long" });
        let monthName = intl.format(new Date(year, monthNumber));
        let month = monthName.charAt(0).toUpperCase() + monthName.slice(1);
        let description = el.descripcion;
        let Id = el.idDiaInhabil;
        return { Id, day, year, month, description };
      } else return [];
    });

    if (dateEvents.length) {
      const allMonths = new Set(dateEvents.map((el) => el.month));
      const months = [...allMonths];
      groupedEvents = months.map((el) => {
        let events = dateEvents.filter(
          (ev) => (ev.month === el) & (ev.year === yearCalendarDesktop)
        );

        let objeto = {
          month: el,
          events: events,
        };
        return objeto;
      });
    }
  }
  return { dateEvents, groupedEvents };
};
