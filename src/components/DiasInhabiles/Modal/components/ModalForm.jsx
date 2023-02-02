import React, { useState } from "react";

export const ModalForm = ({ descriptionEvent, dataClick, edit, setEdit }) => {
  console.log(edit);
  return (
    <>
      {edit ? (
        <>
          <div className="modal-addEvent__data--title">
            <div className="event"></div>
            <h1>
              {descriptionEvent ? descriptionEvent : "Agregar día inhábil"}
            </h1>
          </div>
          <p>{`${dataClick.dayClick} de ${dataClick.month} del ${dataClick.year}`}</p>
          <button onClick={() => setEdit(!edit)}>Editar</button>
          <button onClick={() => setEdit(!edit)}>Eliminar</button>
        </>
      ) : (
        <>
          <div className="modal-addEvent__data--title">
            <h1>
              {descriptionEvent ? descriptionEvent : "Agregar día inhábil"}
            </h1>
          </div>
          <form>
            <label>{`Fecha: ${dataClick.dayClick} de ${dataClick.month} del ${dataClick.year}`}</label>
            <label>
              {`Descripción: `}
              <textarea
                type="text"
                defaultValue={descriptionEvent}
                placeholder={descriptionEvent}
              />
            </label>
            <button>Enviar</button>
          </form>
        </>
      )}
    </>
  );
};
