import React from "react";

/**
 * 参考: https://openweathermap.org/weather-conditions
 */
export const WeatherIcon = (props: {
  icon: string;
  alt: string;
  width?: string;
  height?: string;
}) => {
  return (
    <img
      style={{ width: props.width, height: props.height }}
      src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
      alt={props.alt}
    />
  );
};
