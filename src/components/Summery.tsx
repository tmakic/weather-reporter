import React, { useContext } from "react";
import { WeatherContext } from "components/providers/CurrentWeather";
import { roundNum } from "hooks/useNumber";

import "./Summery.css";

export const Summery = () => {
  const weatherContext = useContext(WeatherContext);
  return (
    <div className="Summery">
      {weatherContext?.currentWeather?.temp && (
        <div>{roundNum(weatherContext?.currentWeather?.temp)}℃</div>
      )}
      {weatherContext?.currentWeather?.feels_like && (
        <div>体感{roundNum(weatherContext?.currentWeather?.feels_like)}℃</div>
      )}
      {weatherContext?.currentWeather?.temp_max && (
        <div>最高{roundNum(weatherContext?.currentWeather?.temp_max)}℃</div>
      )}
      {weatherContext?.currentWeather?.temp_min && (
        <div>最低{roundNum(weatherContext?.currentWeather?.temp_min)}℃</div>
      )}
    </div>
  );
};
