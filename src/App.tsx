import React from "react";
import "./App.css";

import { Summery } from "./components/Summery";
import { Graph } from "./components/Graph";
import { Links } from "./components/Links";

import { WeatherProvider } from "./components/providers/CurrentWeather";

function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <Summery />
        <Graph />
        <Links />
      </WeatherProvider>
    </div>
  );
}

export default App;
