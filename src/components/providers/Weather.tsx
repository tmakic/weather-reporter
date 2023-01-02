import React, { createContext, useEffect, useState, ReactNode } from "react";
import axiosBase from "axios";
import { CurrentWeather, DisplayForecast, ApiResponse } from "types";
import { roundNum } from "utils/NumberUtils";
import { formatDate } from "utils/DateUtils";
import { useGeolocation } from "hooks/useGeolocation";

const axios = axiosBase.create({
  baseURL: process.env.REACT_APP_WEATHER_API_BASE_URL
});

const defaultValue = {
  currentWeather: undefined,
  forecastList: undefined
};

interface WeatherContext {
  currentWeather: CurrentWeather | undefined;
  forecastList: DisplayForecast[] | undefined;
}

export const WeatherContext = createContext<WeatherContext>(defaultValue);

export const WeatherProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const { coord } = useGeolocation();
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather>();
  const [forecastList, setForecastList] = useState<DisplayForecast[]>();

  useEffect(() => {
    getCurrentWeather();
    getForecast();
  }, [coord]);

  const getCurrentWeather = () => {
    if (!coord) return;
    axios
      .get<ApiResponse.GetWeather>("/weather", {
        params: {
          lat: coord.lat,
          lon: coord.lon,
          units: "metric",
          lang: "jp",
          appid: process.env.REACT_APP_WEATHER_API_KEY
        }
      })
      .then((response) => {
        setCurrentWeather({
          datetime: formatDate(response.data.dt, "YYYY/M/D(dd)"),
          feels_like: roundNum(response.data.main.feels_like),
          temp: roundNum(response.data.main.temp),
          temp_max: roundNum(response.data.main.temp_max),
          temp_min: roundNum(response.data.main.temp_min),
          weather: response.data.weather[0]
        });
      });
  };

  const getForecast = () => {
    if (!coord) return;
    axios
      .get<ApiResponse.GetForecastList>("/forecast", {
        params: {
          lat: coord.lat,
          lon: coord.lon,
          units: "metric",
          lang: "jp",
          appid: process.env.REACT_APP_WEATHER_API_KEY
        }
      })
      .then((response) => {
        const newForecasList = response.data.list
          .slice(0, 9)
          .map((forecast) => {
            return {
              datetime: formatDate(forecast.dt, "h:mm"),
              feels_like: roundNum(forecast.main.feels_like),
              temp: roundNum(forecast.main.temp),
              temp_max: roundNum(forecast.main.temp_max),
              temp_min: roundNum(forecast.main.temp_min),
              weather: forecast.weather[0],
              x_axis_data: `${formatDate(forecast.dt, "h:mm")}/${
                forecast.weather[0].icon
              }`
            };
          });
        setForecastList(newForecasList);
      });
  };

  return (
    <WeatherContext.Provider
      value={{ currentWeather: currentWeather, forecastList: forecastList }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
