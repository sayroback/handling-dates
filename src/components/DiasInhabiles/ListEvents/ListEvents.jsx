import React from "react";
import "./style.css";

export const ListEvents = ({ listEvents, Year }) => {
  console.log(listEvents);
  return (
    <div className="list-events">
      <h1 className="list-events--title">Días inhábiles {Year}</h1>
      {listEvents ? (
        listEvents.map((ev, i) => (
          <div key={i} className="list-events--month">
            <h2>{ev.month}</h2>
            {ev.events.map((e, i) => (
              <div key={i} className="list-events--event">
                <span>{e.day} -</span>
                <span>{e.description}</span>
              </div>
            ))}
          </div>
        ))
      ) : (
        <p>No hay días inhábiles registrados </p>
      )}
    </div>
  );
};
