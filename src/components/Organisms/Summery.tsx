import React, { useContext } from "react";
import { WeatherContext } from "components/providers/Weather";
import { roundNum } from "utils/NumberUtils";
import { tempTypeLabel } from "utils/WeatherUtils";
import { WeatherIcon } from "components/Atoms/WeatherIcon";
import { StatisticsPanel } from "components/Molecules/StatisticsPanel";

import "styles/Summery.scss";

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
          <StatisticsPanel
            title={`${tempTypeLabel("max")}気温`}
            temp={currentWeather.temp_max}
            tempType="max"
          />
        )}
        {currentWeather?.temp_min && (
          <StatisticsPanel
            title={`${tempTypeLabel("min")}気温`}
            temp={currentWeather.temp_min}
            tempType="min"
          />
        )}
      </div>
    </div>
  );
};
