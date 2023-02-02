import React from "react";
import { useCalendarToday } from "../../hooks/useCalendarToday";

export const Month = ({
  monthName,
  year,
  ClassName,
  setYearCalendarDesktop,
}) => {
  const { yearToday } = useCalendarToday();
  const onChangeYear = (event) => {
    setYearCalendarDesktop(event.target.value);
  };

  let yearsForSelect = [...Array(7).keys()];
  let listYears = yearsForSelect.map((el, i) => {
    let newYear = yearToday - 2 + i;
    return newYear;
  });

  return (
    <div className={ClassName}>
      <p>{`${monthName} de`}</p>
      {/* <p>{`${year}`}</p> */}
      <div className="calendar__month--year">
        <select value={year} onChange={(e) => onChangeYear(e)}>
          {listYears.map((el) => (
            <option key={el} style={{ background: "#ffffff" }} value={el}>
              {el}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
