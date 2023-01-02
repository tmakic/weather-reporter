import React from "react";
import "styles/App.scss";

import { Summery } from "./components/Organisms/Summery";
import { Graph } from "./components/Organisms/Graph";

import { WeatherProvider } from "./components/providers/Weather";

function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <Summery />
        <Graph />
      </WeatherProvider>
    </div>
  );
}

export default App;
