import React, { useState } from "react";
import "./App.css";
import dias_inhabiles from "./assets/FakeData.json";
import {
  CalendarDesktop,
  ListEvents,
  useCalendarEvents,
  ModalAddEvent,
} from "./components/DiasInhabiles";

function App() {
  const locale = "es";
  const today = new Date();
  const initialStateModal = {
    clientY: 0,
    clientX: 0,
    viewModal: false,
    dataEvent: {},
  };
  const yearToday = today.getUTCFullYear().toString();
  const [yearCalendarDesktop, setYearCalendarDesktop] = useState(yearToday);
  const [coordinatesModal, setCoordinatesModal] = useState(initialStateModal);
  const { dateEvents, groupedEvents } = useCalendarEvents(
    dias_inhabiles,
    locale,
    yearCalendarDesktop
  );

  return (
    <>
      <div className="App">
        <div className="sidebar">sidebar</div>
        <div className="page--calendar-desktop">
          <div className="CalendarDesktop">
            <CalendarDesktop
              locale={locale}
              listEvents={dias_inhabiles}
              Year={yearCalendarDesktop}
              setYearCalendarDesktop={setYearCalendarDesktop}
              dateEvents={dateEvents}
              setCoordinatesModal={setCoordinatesModal}
            />
          </div>
          <ListEvents listEvents={groupedEvents} Year={yearCalendarDesktop} />
        </div>
      </div>
      <ModalAddEvent
        coordinates={coordinatesModal}
        setCoordinatesModal={setCoordinatesModal}
        initialStateModal={initialStateModal}
      />
      <footer></footer>
    </>
  );
}

export default App;
