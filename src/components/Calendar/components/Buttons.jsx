import React from "react";

export const Buttons = ({ setValue, value }) => {
  return (
    <div className="calendar__buttons">
      <button onClick={() => setValue(value + 100 / 12)} disabled={value >= 0}>
        {"<-"}
      </button>
      <button onClick={() => setValue(value - 100 / 12)} disabled={value < -91}>
        {"->"}
      </button>
    </div>
  );
};
