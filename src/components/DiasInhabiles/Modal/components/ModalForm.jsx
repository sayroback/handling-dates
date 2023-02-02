import React, { useState } from "react";

export const ModalForm = ({ descriptionEvent, dataClick, edit, setEdit }) => {
  console.log(edit);
  return (
    <>
      {edit ? (
        <>
          <p>{`${dataClick.dayClick} de ${dataClick.month} del ${dataClick.year}`}</p>
          <button onClick={() => setEdit(!edit)}>Editar</button>
          <button onClick={() => setEdit(!edit)}>Eliminar</button>
        </>
      ) : (
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
      )}
    </>
  );
};
