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
    console.log(dataClick);
  };

  return (
    <>
      <ol className={ClassName}>
        {days
          ? days.map((day, i) => (
              <button
                key={i}
                start={startsOn}
                style={i === 0 ? { gridColumn: `${startsOn + 1}` } : null}
                className={i === 0 ? "first-day" : null}
                onClick={() => clickDay(year, monthName, i + 1)}
              >
                <span
                  className={
                    (monthName === selectDay.month) &
                    (selectDay.dayClick === i + 1)
                      ? "today"
                      : null
                  }
                >
                  {day + 1}
                </span>
              </button>
            ))
          : null}
      </ol>
    </>
  );
};
