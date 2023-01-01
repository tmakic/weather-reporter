import React, { useContext } from "react";
import { WeatherContext } from "components/providers/CurrentWeather";
import { roundNum } from "hooks/useNumber";

export const Links = () => {
  const weatherContext = useContext(WeatherContext);
  return (
    <div className="Links">
      Here is Links!
      {weatherContext?.currentWeather?.temp_max && (
        <a
          href={`https://www.google.com/search?q=気温${roundNum(
            weatherContext?.currentWeather?.temp_max
          )}度+服装`}
          target="_blank"
          rel="noopener noreferrer"
        >
          最高気温{roundNum(weatherContext?.currentWeather?.temp_max)}℃の服装
        </a>
      )}
      {weatherContext?.currentWeather?.temp_min && (
        <a
          href={`https://www.google.com/search?q=気温${roundNum(
            weatherContext?.currentWeather?.temp_min
          )}度+服装`}
          target="_blank"
          rel="noopener noreferrer"
        >
          最低気温{roundNum(weatherContext?.currentWeather?.temp_min)}℃の服装
        </a>
      )}
    </div>
  );
};
