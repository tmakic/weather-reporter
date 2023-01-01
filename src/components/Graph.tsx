import React, { useContext } from "react";
import { AreaChart, Area, LabelList, XAxis } from "recharts";
import { WeatherContext } from "components/providers/CurrentWeather";

import "./Graph.scss";

const XAxisTick = ({
  x,
  y,
  payload
}: {
  x: number;
  y: number;
  payload: { value: string };
}) => {
  if (!payload.value) return <g x={x - 12} y={y + 4} height={60}></g>;

  const [datetime, weatherIcon] = payload.value.split("/");

  if (!datetime || !weatherIcon)
    return <g x={x - 12} y={y + 4} height={60}></g>;

  return (
    <g x={x - 12} y={y + 4} height={60}>
      <text
        x={datetime.length === 4 ? x - 16 : x - 24}
        y={y + 16}
        fontFamily="Verdana"
        fontSize="15"
      >
        {datetime}
      </text>
      <svg x={x - 30} y={y + 8} width={60} height={60}>
        <image
          href={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
          height="60"
          width="60"
        />
      </svg>
    </g>
  );
};

export const Graph = () => {
  const { forecastList } = useContext(WeatherContext);
  return (
    <div>
      <AreaChart
        className="AreaChart"
        width={800}
        height={300}
        data={forecastList}
        margin={{
          top: 20,
          right: 20,
          left: 20,
          bottom: 50
        }}
      >
        <XAxis dataKey="x_axis_data" interval={0} tick={XAxisTick}></XAxis>
        <Area type="monotone" dataKey="temp" stroke="#8884d8" fill="#8884d8">
          <LabelList dataKey="temp" position="top" />
        </Area>
      </AreaChart>
    </div>
  );
};
