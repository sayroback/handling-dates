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
  const [selectDay, setSelectDat] = useState({
    dayClick: today,
    month: monthToday,
  });
  const { OnClickDay } = useOnClickDay();
  const clickDay = (year, month, dayClick) => {
    let dataClick = OnClickDay(year, month, dayClick);
    setSelectDat(dataClick);
  };

  return (
    <>
      <ol className={ClassName}>
        {days
          ? days.map((day, i) => (
              <li
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
              </li>
            ))
          : null}
      </ol>
    </>
  );
};
