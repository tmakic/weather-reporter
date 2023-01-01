import React, { createContext, useEffect, useState, ReactNode } from "react";

import {
  CurrentWeather,
  DisplayForecast,
  Coord,
  ApiResponse
} from "../../types";

import { roundNum } from "hooks/useNumber";

import axiosBase from "axios";

const axios = axiosBase.create({
  baseURL: process.env.REACT_APP_WEATHER_API_BASE_URL
});

// TODO: 日付回りを別ファイルに移す
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Tokyo");
const formatDate = (unixtime: number, format?: string) =>
  dayjs.unix(unixtime).tz().format(format);

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
  const [coord, setCoord] = useState<Coord>();
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather>();
  const [forecastList, setForecastList] = useState<DisplayForecast[]>();

  // TODO: 位置取得の処理を別ファイルに移す
  const onSuccessGetPosition = async (position: GeolocationPosition) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    await setCoord({ lat: lat, lon: lon });
  };

  const onErrorGetPosition = async () => {
    // 都庁所在地
    const lat = 35.68966414887361;
    const lon = 139.69210148192565;

    await setCoord({ lat: lat, lon: lon });
  };

  useEffect(() => {
    (async () => {
      if (!navigator.geolocation) {
        await onErrorGetPosition();
      } else {
        await navigator.geolocation.getCurrentPosition(
          onSuccessGetPosition,
          onErrorGetPosition
        );
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      getCurrentWeather();
      getForecast();
    })();
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
          datetime: formatDate(response.data.dt),
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
