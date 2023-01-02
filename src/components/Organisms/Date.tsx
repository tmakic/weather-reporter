import React, { useContext } from "react";
import { WeatherContext } from "components/providers/Weather";

import "styles/Date.scss";

export const Date = () => {
  const { currentWeather } = useContext(WeatherContext);
  return <div className="Date">{currentWeather?.datetime}</div>;
};
