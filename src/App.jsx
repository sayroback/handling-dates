import React from "react";
import { CalendarDesktop } from "./components/Calendar";

function App() {
  return (
    <div className="App">
      <CalendarDesktop Year={2022} locale="es" />
    </div>
  );
}

export default App;
