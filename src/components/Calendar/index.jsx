import React, { useState } from "react";
import "./style.css";
import { DaysMonth } from "./components/DaysMonth";
import { DaysNames } from "./components/DaysNames";
import { Month } from "./components/Month";
import { useCalendarData } from "./hooks/useCalendarData";
import styled from "styled-components";
import { Buttons } from "./components/Buttons";
import { useCalendarEvent } from "./hooks/useCalendarEvent";

const Carrousel = styled.div`
  transform: translateX(${(prop) => prop.translate}%);
`;
// Las dimensiones mínimas del componente son 470x470 px
// Las dimensiones máximas del componente son 720x600 px
export const CalendarDesktop = ({ locale = "es", Year }) => {
  const { calendar, weekDaysNames, fullDate, year, today, findIndexMonth } =
    useCalendarData(locale, Year);
  const { monthTodayNameString, numDay, initialScroll } =
    useCalendarEvent(locale);

  const [carrouselScroll, setCarrouselScroll] = useState(initialScroll);

  return (
    <div className="date-picker">
      <div className="date-picker--header">
        <span onClick={() => setCarrouselScroll(initialScroll)}>
          {fullDate}
        </span>
        <Buttons setValue={setCarrouselScroll} value={carrouselScroll} />
      </div>
      <section className="calendar">
        <Carrousel translate={carrouselScroll} className="calendar--container">
          {calendar
            ? calendar.map((cal, i) => (
                <div key={i} className="calendar__month--container">
                  {/* Las clases de los componentes se asignan con la primer letra mayúscula ClassName ya que NO es el atributo className de ReactJS */}
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
                      monthName={cal.monthName}
                      today={numDay}
                      monthToday={monthTodayNameString}
                      year={year}
                    />
                  </div>
                </div>
              ))
            : null}
        </Carrousel>
      </section>
    </div>
  );
};
