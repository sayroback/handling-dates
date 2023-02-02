import React, { useState } from "react";
import { useCalendarToday } from "../../hooks/useCalendarToday";
import { useOnClickDay } from "../../hooks/useOnClickDay";

export const DaysMonth = ({
  daysNumber,
  ClassName,
  startsOn,
  monthName,
  today,
  monthToday,
  year,
  dateEvents,
  listEvents,
  setCoordinatesModal,
}) => {
  const days = [...Array(daysNumber).keys()];
  const initialSelectDay = {
    dayClick: today,
    month: monthToday,
  };
  const [selectDay, setSelectDay] = useState(initialSelectDay);
  const { OnClickDay } = useOnClickDay();
  const { yearToday } = useCalendarToday();

  const clickDay = (event, year, month, dayClick) => {
    let dataClick = OnClickDay(year, month, dayClick);
    let eventDay = dateEvents.filter(
      (el) =>
        (el.day === dayClick) & (el.month === monthName) & (el.year === year)
    );
    if (JSON.stringify(selectDay) === JSON.stringify(dataClick)) {
      setSelectDay(initialSelectDay);
    } else {
      setSelectDay(dataClick);
    }
    setCoordinatesModal({
      clientY: event.clientY - 120,
      clientX: event.clientX + 40,
      viewModal: true,
      dataEvent: eventDay,
    });
  };

  const classForDays = (index) => {
    if (dateEvents) {
      let diasInhabilies = dateEvents.filter(
        (el) =>
          (el.day === index + 1) & (el.month === monthName) & (el.year === year)
      );
      if (
        (monthName === selectDay.month) &
        (selectDay.dayClick === index + 1) &
        (year === yearToday)
      ) {
        return "today";
      } else if (diasInhabilies.length > 0) {
        return "event";
      }
    }
    return "";
  };

  return (
    <>
      <ol className={ClassName}>
        {days
          ? days.map((day, i) => (
              <button
                key={i}
                start={startsOn}
                style={i === 0 ? { gridColumn: `${startsOn}` } : null}
                className={i === 0 ? "first-day" : null}
                onClick={(e) => clickDay(e, year, monthName, i + 1)}
              >
                <div className={classForDays(i)}>{day + 1}</div>
              </button>
            ))
          : null}
      </ol>
    </>
  );
};
