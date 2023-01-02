import React from "react";
import "styles/App.scss";

import { Date } from "components/Organisms/Date";
import { Summery } from "components/Organisms/Summery";
import { Graph } from "components/Organisms/Graph";

import { WeatherProvider } from "./components/providers/Weather";

function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <Date />
        <Summery />
        <Graph />
      </WeatherProvider>
    </div>
  );
}

export default App;
