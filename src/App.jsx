import React, { useState } from "react";
import "./App.css";
import dias_inhabiles from "./assets/FakeData.json";
import {
  CalendarDesktop,
  ListEvents,
  useCalendarEvents,
  ModalAddEvent
} from "./components/DiasInhabiles";

function App() {
  const locale = "es";
  const today = new Date();
  const yearToday = today.getUTCFullYear().toString();
  const [yearCalendarDesktop, setYearCalendarDesktop] = useState(yearToday);
  const { dateEvents, groupedEvents } = useCalendarEvents(
    dias_inhabiles,
    locale,
    yearCalendarDesktop
  );

  return (
    <div className="App">
      <div className="CalendarDesktop">
        <CalendarDesktop
          locale={locale}
          listEvents={dias_inhabiles}
          Year={yearCalendarDesktop}
          setYearCalendarDesktop={setYearCalendarDesktop}
          dateEvents={dateEvents}
        />
      </div>
      <ListEvents listEvents={groupedEvents} Year={yearCalendarDesktop} />
      <ModalAddEvent />
    </div>
  );
}

export default App;
