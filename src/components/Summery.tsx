import React, { useContext } from "react";
import { WeatherContext } from "./providers/CurrentWeather";

export const Summery = () => {
  const weatherContext = useContext(WeatherContext);
  return <div>Here is Summery!{weatherContext?.currentWeather?.datetime}</div>;
};
