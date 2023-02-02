import { Player } from "@lottiefiles/react-lottie-player";
import React, { useRef, useState } from "react";
import arrow from "../assets/arrow.json";

export const Buttons = ({ setValue, value, children }) => {
  const playerRefLeft = useRef(null);
  const playerRefRight = useRef(null);

  const clickLeft = () => {
    playerRefLeft.current.play();
    setValue(value - 1);
  };
  const clickRight = () => {
    playerRefRight.current.play();
    setValue(value + 1);
  };

  return (
    <>
      <button
        className="calendar__buttons--left"
        onClick={() => clickLeft()}
        disabled={value === 0}
      >
        <Player src={arrow} speed={3} ref={playerRefLeft}></Player>
      </button>
      {children}
      <button onClick={() => clickRight()} disabled={value >= 11}>
        <Player src={arrow} speed={3} ref={playerRefRight}></Player>
      </button>
    </>
  );
};
