import Lottie from "lottie-react";
import React, { useState } from "react";
import arrow from "../assets/arrow.json";

export const Buttons = ({ setValue, value }) => {
  const [loopLeft, setLoopLeft] = useState(false);
  const [loopRight, setLoopRight] = useState(false);
  const clickLeft = () => {
    setValue(value - 1);
    setLoopLeft(true);
    setTimeout(() => {
      setLoopLeft(false);
    }, 10);
  };
  const clickRight = () => {
    setValue(value + 1);
    setLoopRight(true);
    setTimeout(() => {
      setLoopRight(false);
    }, 10);
  };

  return (
    <div className="calendar__buttons">
      <button
        className="calendar__buttons--left"
        onClick={() => clickLeft()}
        disabled={value === 0}
      >
        <Lottie animationData={arrow} loop={loopLeft}></Lottie>
      </button>
      <button onClick={() => clickRight()} disabled={value >= 11}>
        <Lottie animationData={arrow} loop={loopRight}></Lottie>
      </button>
    </div>
  );
};
