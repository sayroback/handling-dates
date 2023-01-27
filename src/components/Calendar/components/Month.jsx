import React from "react";

export const Month = ({monthName, year, ClassName}) => {
  return (
    <h1 className={ClassName}>{`${monthName} ${year}`}</h1>
  )
}
