import React, { useState } from "react";
import { CalendarDesktop } from "./components/Calendar";
import dias_inhabiles from "./assets/FakeData.json";

function App() {
  const [yearCalendarDesktop, setYearCalendarDesktop] = useState();
  return (
    <div className="App">
      <CalendarDesktop
        locale="es"
        listEvents={dias_inhabiles}
        Year={yearCalendarDesktop}
        setYearCalendarDesktop={setYearCalendarDesktop}
      />
    </div>
  );
}

export default App;
