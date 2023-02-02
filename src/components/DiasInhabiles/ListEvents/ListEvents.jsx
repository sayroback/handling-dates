import React from "react";

export const ListEvents = ({ listEvents, Year }) => {
  return (
    <div>
      <h1>Días inhábiles {Year}</h1>
      {listEvents
        ? listEvents.map((ev, i) => (
            <div key={i}>
              <p>{ev.descripcion}</p>
            </div>
          ))
        : null}
    </div>
  );
};
