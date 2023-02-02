import React from "react";

export const DaysNames = ({ weekDaysNames, ClassName }) => {
  return (
    <>
      <ol className={ClassName}>
        {weekDaysNames
          ? weekDaysNames.map((day, i) => (
            <li
            key={i}
            >
                {day}
              </li>
            ))
            : null}
      </ol>
    </>
  );
};
