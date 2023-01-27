import React from "react";

export const useOnClickDay = () => {
  let dateOfClick;
  const OnClickDay = (year, month, day) => {
    console.log(year, month, day);
  };
  return { OnClickDay };
};
