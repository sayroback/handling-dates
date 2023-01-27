import React from "react";

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
              >
                <span
                  className={
                    (monthName === monthToday) & (today === i + 1)
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
