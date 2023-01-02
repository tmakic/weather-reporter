import React from "react";

export const XAxisTick = ({
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
        y={y + 24}
        fontFamily="Verdana"
        fontSize="15"
        style={{ fill: "#48484A" }}
      >
        {datetime}
      </text>
      <svg x={x - 30} y={y + 16} width={60} height={60}>
        <image
          href={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
          height="60"
          width="60"
        />
      </svg>
    </g>
  );
};
