import React, { useContext } from "react";
import { WeatherContext } from "components/providers/Weather";
import { roundNum } from "hooks/useNumber";

import { WeatherIcon } from "components/WeatherIcon";
import { ClothIcon } from "components/ClothIcon";

import "./Summery.scss";

export const Summery = () => {
  const { currentWeather } = useContext(WeatherContext);
  return (
    <div className="Summery">
      <div className="Summery__CurrentWeather">
        {currentWeather?.weather.icon && (
          <WeatherIcon
            icon={currentWeather?.weather.icon}
            alt="WeatherIcon"
            width="200px"
          />
        )}
        {currentWeather?.temp && (
          <div className="Summery__CurrentWeather__Temp">
            <span className="Summery__CurrentWeather__Temp__Num">
              {roundNum(currentWeather?.temp)}
            </span>
            <span className="Summery__CurrentWeather__Temp__Unit">℃</span>
          </div>
        )}
      </div>
      <div className="Summery__Statistics">
        {currentWeather?.temp_max && (
          <div className="Summery__Statistics__Content Summery__Statistics__Content--Max">
            <span className="Summery__Statistics__Content__Title">
              最高気温
            </span>
            <span className="Summery__Statistics__Content__Num Summery__Statistics__Content__Num--Max">
              {roundNum(currentWeather?.temp_max)}
            </span>
            <span className="Summery__Statistics__Content__Unit">℃</span>
            <a
              className="Summery__Statistics__Content__ClothIconWrapper"
              href={`https://www.google.com/search?q=気温${roundNum(
                currentWeather?.temp_max
              )}度+服装`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ClothIcon
                className="Summery__Statistics__Content__ClothIcon"
                width="24px"
                height="24px"
              />
            </a>
          </div>
        )}
        {currentWeather?.temp_min && (
          <div className="Summery__Statistics__Content Summery__Statistics__Content--Min">
            <span className="Summery__Statistics__Content__Title">
              最低気温
            </span>
            <span className="Summery__Statistics__Content__Num Summery__Statistics__Content__Num--Min">
              {roundNum(currentWeather?.temp_min)}
            </span>
            <span className="Summery__Statistics__Content__Unit">℃</span>
            <a
              className="Summery__Statistics__Content__ClothIconWrapper"
              href={`https://www.google.com/search?q=気温${roundNum(
                currentWeather?.temp_min
              )}度+服装`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ClothIcon
                className="Summery__Statistics__Content__ClothIcon"
                width="24px"
                height="24px"
              />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
