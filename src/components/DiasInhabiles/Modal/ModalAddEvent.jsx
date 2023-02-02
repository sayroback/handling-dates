import React, { useEffect, useState } from "react";
import { ModalForm } from "./components/ModalForm";
import "./style.css";

export const ModalAddEvent = ({
  coordinates,
  setCoordinatesModal,
  initialStateModal,
}) => {
  const closeModal = () => {
    setCoordinatesModal(initialStateModal);
  };
  let descriptionEvent = coordinates.dataEvent[0]?.description;
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    setEdit(!!descriptionEvent);
  }, [descriptionEvent]);

  return (
    <>
      <div
        className="modal-addEvent--background"
        style={{ display: coordinates.viewModal ? "block" : "none" }}
        onClick={() => closeModal()}
      ></div>
      <div
        className="modal-addEvent--container"
        style={{
          top: `${coordinates.clientY}px`,
          left: `${coordinates.clientX}px`,
          display: coordinates.viewModal ? "block" : "none",
        }}
      >
        <div className="modal-addEvent--close">
          <span style={{ cursor: "pointer" }} onClick={() => closeModal()}>
            X
          </span>
        </div>
        <div className="modal-addEvent--data">
          <h1>{descriptionEvent ? descriptionEvent : "Agregar día inhábil"}</h1>
          <ModalForm
            descriptionEvent={descriptionEvent}
            dataClick={coordinates.dataClick}
            edit={edit}
            setEdit={setEdit}
          />
        </div>
      </div>
    </>
  );
};
