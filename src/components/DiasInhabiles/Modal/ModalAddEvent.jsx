import React from "react";
import "./style.css";

export const ModalAddEvent = ({
  coordinates,
  setCoordinatesModal,
  initialStateModal,
}) => {
  return (
    <div
      className="modal-addEvent--background"
      style={{ display: coordinates.viewModal ? "block" : "none" }}
      onClick={() => setCoordinatesModal(initialStateModal)}
    >
      <div
        className="modal-addEvent--container"
        style={{
          top: `${coordinates.clientY}px`,
          left: `${coordinates.clientX}px`,
        }}
      >
        <span
          style={{ cursor: "pointer" }}
          onClick={() => setCoordinatesModal(initialStateModal)}
        >
          X
        </span>
        <h1>ModalAddEvent</h1>
        <p>{JSON.stringify(coordinates.dataEvent)}</p>
      </div>
    </div>
  );
};
