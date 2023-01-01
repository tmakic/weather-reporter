import React from "react";
import "./App.scss";

import { Summery } from "./components/Summery";
import { Graph } from "./components/Graph";

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
