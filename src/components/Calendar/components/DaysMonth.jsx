import React from "react";

export const DaysMonth = ({ daysNumber, ClassName, startsOn }) => {
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
                <span>{day + 1}</span>
              </li>
            ))
          : null}
      </ol>
    </>
  );
};
