import React from "react";
import { CalendarDesktop } from "./components/Calendar";
import dias_inhabiles from "./assets/FakeData.json";

function App() {
  return (
    <div className="App">
      <CalendarDesktop locale="es" listEvents={dias_inhabiles} />
    </div>
  );
}

export default App;
