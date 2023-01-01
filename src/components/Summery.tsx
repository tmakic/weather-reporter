import React, { useContext } from "react";
import { WeatherContext } from "components/providers/CurrentWeather";
import { roundNum } from "hooks/useNumber";

import { WeatherIcon } from "components/WeatherIcon";

import "./Summery.css";

export const Summery = () => {
  const { currentWeather } = useContext(WeatherContext);
  return (
    <div className="Summery">
      {currentWeather?.temp && <div>{roundNum(currentWeather?.temp)}℃</div>}
      {currentWeather?.weather.icon && (
        <WeatherIcon icon={currentWeather?.weather.icon} alt="WeatherIcon" />
      )}
      {currentWeather?.feels_like && (
        <div>体感{roundNum(currentWeather?.feels_like)}℃</div>
      )}
      {currentWeather?.temp_max && (
        <div>最高{roundNum(currentWeather?.temp_max)}℃</div>
      )}
      {currentWeather?.temp_min && (
        <div>最低{roundNum(currentWeather?.temp_min)}℃</div>
      )}
    </div>
  );
};
