import React, { useState } from "react";
import { useOnClickDay } from "../hooks/useOnClickDay";

export const DaysMonth = ({
  daysNumber,
  ClassName,
  startsOn,
  monthName,
  today,
  monthToday,
  year,
}) => {
  const days = [...Array(daysNumber).keys()];
  const initialSelectDay = {
    dayClick: today,
    month: monthToday,
  };
  const [selectDay, setSelectDay] = useState(initialSelectDay);
  const { OnClickDay } = useOnClickDay();
  const clickDay = (year, month, dayClick) => {
    let dataClick = OnClickDay(year, month, dayClick);
    if (JSON.stringify(selectDay) === JSON.stringify(dataClick)) {
      setSelectDay(initialSelectDay);
    } else {
      setSelectDay(dataClick);
    }
  };

  const classForDays = (index) => {
    if ((monthName === selectDay.month) & (selectDay.dayClick === index + 1)) {
      return "today";
    }
    return null;
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
                onClick={() => clickDay(year, monthName, i + 1)}
              >
                <div className={classForDays(i)}>{day + 1}</div>
              </button>
            ))
          : null}
      </ol>
    </>
  );
};
