import React from "react";
import "./style.css";
import { DaysMonth } from "./components/DaysMonth";
import { DaysNames } from "./components/DaysNames";
import { Month } from "./components/Month";
import { useCalendarData } from "./hooks/useCalendarData";

export const Calendar = ({ locale = "es", Year }) => {
  const { calendar, weekDaysNames, today, year } = useCalendarData(
    locale,
    Year
  );
  return (
    <section className="calendar">
      {calendar
        ? calendar.map((cal, i) => (
            <div className="calendar__container__month" key={i}>
              <Month
                ClassName="calendar__month--name"
                monthName={cal.monthName}
                year={year}
              />
              <div className="calendar__month__days">
                <DaysNames
                  ClassName="calendar__month__days--name"
                  weekDaysNames={weekDaysNames}
                />
                <DaysMonth
                  ClassName="calendar__month__days--number"
                  daysNumber={cal.daysOfMonth}
                  startsOn={cal.startsOn}
                />
              </div>
            </div>
          ))
        : null}
    </section>
  );
};
