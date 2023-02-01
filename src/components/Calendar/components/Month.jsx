import React from "react";

export const Month = ({ monthName, year, ClassName }) => {
  return (
    <div className={ClassName}>
      <p>{`${monthName} de`}</p>
      <p>{`${year}`}</p>
    </div>
  );
};
