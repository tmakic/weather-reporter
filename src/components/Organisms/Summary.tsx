import React, { useContext } from "react";
import { WeatherContext } from "components/providers/Weather";
import { roundNum } from "utils/NumberUtils";
import { tempTypeLabel } from "utils/WeatherUtils";
import { WeatherIcon } from "components/Atoms/WeatherIcon";
import { StatisticsPanel } from "components/Molecules/StatisticsPanel";

import "styles/Summary.scss";

export const Summary = () => {
  const { currentWeather } = useContext(WeatherContext);
  return (
    <div className="Summary">
      <div className="Summary__CurrentWeather">
        {currentWeather?.weather.icon && (
          <div className="Summary__CurrentWeather__IconWrapper">
            <WeatherIcon
              icon={currentWeather?.weather.icon}
              alt="WeatherIcon"
              width="280px"
            />
          </div>
        )}
        {currentWeather?.temp && (
          <div className="Summary__CurrentWeather__Temp">
            <span className="Summary__CurrentWeather__Temp__Num">
              {roundNum(currentWeather?.temp)}
            </span>
            <span className="Summary__CurrentWeather__Temp__Unit">℃</span>
          </div>
        )}
      </div>
      <div className="Summary__Statistics">
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
