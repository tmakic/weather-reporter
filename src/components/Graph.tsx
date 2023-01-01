import React, { useContext } from "react";
import { AreaChart, Area, LabelList, XAxis } from "recharts";
import { WeatherContext } from "components/providers/CurrentWeather";

import "./Graph.css";

export const Graph = () => {
  const { forecastList } = useContext(WeatherContext);
  return (
    <div>
      <AreaChart
        className="AreaChart"
        width={800}
        height={200}
        data={forecastList}
        margin={{
          top: 20,
          right: 20,
          left: 20,
          bottom: 5
        }}
      >
        <XAxis dataKey="datetime"></XAxis>
        <Area type="monotone" dataKey="temp" stroke="#8884d8" fill="#8884d8">
          <LabelList dataKey="temp" position="top" />
        </Area>
      </AreaChart>
    </div>
  );
};
