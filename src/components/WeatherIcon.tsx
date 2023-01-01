import React from "react";

export const WeatherIcon = (props: { icon: string; alt: string }) => {
  return (
    <img
      style={{ width: "20px", height: "20px" }}
      src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
      alt={props.alt}
    />
  );
};
