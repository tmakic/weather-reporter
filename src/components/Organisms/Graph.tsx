import React, { useContext } from "react";
import { AreaChart, Area, LabelList, XAxis } from "recharts";
import { WeatherContext } from "components/providers/Weather";
import { XAxisTick } from "components/Atoms/GraphXAxisTick";
import { LabelContent } from "components/Atoms/GraphLabelContent";

import "styles/Graph.scss";

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
        <XAxis
          dataKey="x_axis_data"
          interval={0}
          tick={XAxisTick}
          tickLine={{
            stroke: "#48484A",
            strokeWidth: 1,
            strokeLinecap: "round"
          }}
          axisLine={{
            stroke: "#48484A",
            strokeWidth: 1,
            strokeLinecap: "round"
          }}
        ></XAxis>
        <Area type="monotone" dataKey="temp" stroke="#F8D3CA" fill="#FAE2DC">
          <LabelList dataKey="temp" position="top" content={LabelContent} />
        </Area>
      </AreaChart>
    </div>
  );
};
