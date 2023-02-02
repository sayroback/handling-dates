import React, { useState } from "react";
import dias_inhabiles from "./assets/FakeData.json";
import {
  CalendarDesktop,
  ListEvents,
  useCalendarEvents,
} from "./components/DiasInhabiles";

function App() {
  const locale = "es";
  const today = new Date();
  const yearToday = today.getUTCFullYear().toString();
  const [yearCalendarDesktop, setYearCalendarDesktop] = useState(yearToday);
  const { dateEvents } = useCalendarEvents(dias_inhabiles, locale);

  return (
    <>
      <div className="CalendarDesktop">
        <CalendarDesktop
          locale={locale}
          listEvents={dias_inhabiles}
          Year={yearCalendarDesktop}
          setYearCalendarDesktop={setYearCalendarDesktop}
          dateEvents={dateEvents}
        />
      </div>
      <ListEvents listEvents={dias_inhabiles} Year={yearCalendarDesktop} />
    </>
  );
}

export default App;
